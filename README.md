# Software-Engineering-Project

This repository contains the Software Requirements Specification (SRS), design artifacts, and implementation resources for an **AI-Powered Medical Chatbot for Disease Diagnosis and Prescription using Chest X-Ray Images**.  
The system uses a **ResNet-50 deep learning model** to classify chest X-ray images into *Normal*, *Pneumonia*, or *COVID-19*, and provides a user-friendly chatbot interface for explanations and preliminary medical guidance.

## 📌 Project Overview
The project aims to improve accessibility to medical diagnostic support by integrating machine learning, medical imaging, and conversational AI. It assists users in:
- Uploading chest X-ray images  
- Receiving AI-driven diagnostic results  
- Interacting with a chatbot for interpretation and guidance  
- Accessing downloadable diagnostic reports  
- Receiving notifications regarding diagnosis completion  

## 🏗️ System Features
- Image upload and validation  
- Automated preprocessing  
- Deep learning-based diagnosis (ResNet-50)  
- Chatbot interaction module  
- Report generation (PDF/JSON)  
- User and admin management  
- Email/SMS notifications  

## 🗂️ Repository Contents
- `/docs` – SRS, DFDs, diagrams, and documentation  
- `/src` – Model training and inference scripts  
- `/ui` – React-based web interface  
- `/backend` – API, authentication, database, and processing logic  
- `/datasets` – Instructions for downloading Kaggle datasets  

## 🛠️ Tech Stack
- **Frontend:** React  
- **Backend:** Python, Flask/Django  
- **Deep Learning:** TensorFlow (ResNet-50)  
- **Database:** MySQL  
- **OS:** Windows 11  

## 📥 Dataset
Chest X-ray datasets for training and evaluation are sourced from Kaggle. Follow dataset usage instructions in `/datasets`.

## 🧪 Testing
Includes:
- Unit tests for model and backend  
- Integration tests for full pipeline  
- UI tests for chatbot and upload interface  

## 📄 License
This project is for academic and research purposes unless stated otherwise.

## 🤝 Contributors
- Team members  
- Supervisors  
- Collaborators  

---

Thank you for exploring this project!  
Feel free to contribute or raise issues through GitHub.
