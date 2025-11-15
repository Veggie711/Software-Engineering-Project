# DenseNet Model Results

Below are the performance metrics of the DenseNet model on the COVID-19 chest X-ray dataset:

```
                 precision    recall  f1-score   support

          COVID       0.96      0.99      0.97       542
         Normal       0.95      0.95      0.95      1529
Viral Pneumonia       0.98      0.99      0.99       202
   Lung_Opacity       0.93      0.92      0.93       902

       accuracy                           0.95      3175
      macro avg       0.96      0.96      0.96      3175
   weighted avg       0.95      0.95      0.95      3175
```

---

# COVID-19 Chest X-Ray Database

A team of researchers from **Qatar University (Doha)**, **University of Dhaka (Bangladesh)**, and collaborators from **Pakistan and Malaysia**, working with medical doctors, have created a comprehensive database of COVID-19, Normal, Lung Opacity, and Viral Pneumonia chest X-ray images.

## Dataset Releases

- **Initial Release**
  - 219 COVID-19
  - 1341 Normal
  - 1345 Viral Pneumonia

- **First Update**
  - COVID-19 cases increased to 1200

- **Second Update**
  - 3616 COVID-19
  - 10,192 Normal
  - 6012 Lung Opacity
  - 1345 Viral Pneumonia

---

## COVID-19 Data Sources

- 2473 images from PadChest dataset [1]  
- 183 images from German medical school repository [2]  
- 559 images from SIRM, GitHub, Kaggle & Twitter [3–6]  
- 400 images from another GitHub source [7]  

---

## Normal Images

- 8851 from RSNA dataset [8]  
- 1341 from Kaggle dataset [9]  

---

## Lung Opacity Images

- 6012 images from RSNA dataset [8]  

---

## Viral Pneumonia Images

- 1345 images from the Chest X-Ray Pneumonia dataset [9]  

---

## Citations

If you use this dataset, please cite:

1. **Chowdhury et al., 2020**  
   *“Can AI help in screening Viral and COVID-19 pneumonia?”*  
   IEEE Access, Vol. 8, pp. 132665–132676.

2. **Rahman et al., 2020**  
   *“Exploring the Effect of Image Enhancement Techniques on COVID-19 Detection using Chest X-ray Images.”*  
   arXiv:2012.02238.

---

## References

[1] https://bimcv.cipf.es/bimcv-projects/bimcv-covid19  
[2] https://github.com/ml-workgroup/covid-19-image-repository/tree/master/png  
[3] https://sirm.org/category/senza-categoria/covid-19  
[4] https://eurorad.org  
[5] https://github.com/ieee8023/covid-chestxray-dataset  
[6] https://figshare.com/articles/COVID-19_Chest_X-Ray_Image_Repository/12580328  
[7] https://github.com/armiro/COVID-CXNet  
[8] https://www.kaggle.com/c/rsna-pneumonia-detection-challenge/data  
[9] https://www.kaggle.com/paultimothymooney/chest-xray-pneumonia  

---

## Image Format

All images are in **PNG** format with a resolution of **299×299 pixels**.

---

## Objective

This dataset aims to support researchers in developing impactful AI models for detecting COVID-19 and other lung infections.
