import torch
import torch.nn as nn
from torchvision import models
from PIL import Image
import torchvision.transforms as transforms
import os
import sys
import json

def load_model(model_filename="model.pth"):
    base_dir = os.path.dirname(os.path.abspath(__file__)) 
    model_path = os.path.join(base_dir, model_filename)

    model = models.densenet121(weights=None)
    num_ftrs = model.classifier.in_features

    model.classifier = nn.Sequential(
        nn.Linear(num_ftrs, 512),
        nn.ReLU(),
        nn.Dropout(0.2),
        nn.Linear(512, 4)
    )

    state_dict = torch.load(model_path, map_location="cpu")
    model.load_state_dict(state_dict)
    model.eval()

    return model


transform = transforms.Compose([
    transforms.Resize((256, 256)),
    transforms.ToTensor(),
    transforms.Normalize(
        mean=[0.485, 0.456, 0.406],
        std=[0.229, 0.224, 0.225],
    )
])

CLASSES = ["COVID", "Normal", "Viral Pneumonia", "Lung_Opacity"]



def predict_image(image_path, model):
    img = Image.open(image_path).convert("RGB")
    x = transform(img).unsqueeze(0)

    with torch.no_grad():
        logits = model(x)
        probs = torch.softmax(logits, dim=1)
        pred_idx = torch.argmax(probs).item()

    return {
        "probabilities": probs.numpy()[0].tolist(),
        "predicted_class": CLASSES[pred_idx]
    }

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python pipeline.py <image_path>")
        sys.exit(1)

    image_path = sys.argv[1]
    model = load_model()
    result = predict_image(image_path, model)
    print(json.dumps(result))
