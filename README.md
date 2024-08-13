# Satellite Data Visualization For Agriculture Monitoring

## Project Overview

In modern agriculture and environmental monitoring, timely identification of anomalies in satellite imagery is crucial. Our project leverages advanced AI and remote sensing technologies to detect and classify anomalies in satellite images, addressing issues like crop diseases, water stress, and land management problems.

## Objective

- **Interactive Visualization:** Create a user-friendly interface to present complex agricultural data intuitively.
- **Scalable System:** Develop a system that uses satellite data and deep learning to provide insights into crop health.

## Methodology

We use Convolutional Neural Networks (CNNs) to analyze satellite images and categorize anomalies into three classes based on vegetation, soil health, and moisture content:

- **Vegetation Classification:**
  - Green: Healthy vegetation
  - Yellow/Orange: Sparse or stressed greenery
  - Red: Non-vegetated areas

- **Soil Health Classification:**
  - Green: Healthier soil
  - Yellow/Orange: Moderately healthy soil
  - Red: Degraded soil

- **Moisture Content Classification:**
  - Green: Low moisture content
  - Yellow/Orange: Moderate moisture content
  - Red: High moisture content

The process involves data collection, preprocessing, CNN architecture design, model training, hyperparameter tuning, and validation.

## Technologies

- **Programming Language:** Python 3.x
- **Libraries:** NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, TensorFlow, Keras
- **Data Visualization:** Matplotlib, Seaborn, EarthPy, RasterIO, Plotly
- **Development Environments:** Jupyter Notebook, Google Colab
- **Web Development Technologies:** React, CSS, Falsk

## Model Inputs

- **NDVI (Normalized Difference Vegetation Index):** Measures vegetation health by comparing the difference between near-infrared (NIR) and red light. Higher NDVI values indicate healthier vegetation.
    [![NDVI image](https://i.postimg.cc/D02RrTsG/Screenshot-2024-08-13-184833.png)](https://postimg.cc/8J0yGxZk)

- **SAVI (Soil-Adjusted Vegetation Index):** Similar to NDVI but adjusted for soil brightness. It improves vegetation detection in areas with sparse vegetation and varying soil conditions.
    [!SAVI](https://i.postimg.cc/7hP2DsBV/Screenshot-2024-08-13-185809.png)](https://postimg.cc/wyPvQVYy)

- **NDMI (Normalized Difference Moisture Index):** Assesses moisture content in vegetation by comparing NIR and shortwave infrared (SWIR) bands. It helps identify areas with high or low moisture content.
    [![NDMI](https://i.postimg.cc/vBTys5rn/Screenshot-2024-08-13-185943.png)](https://postimg.cc/zLs6wbPD)

## Model Outputs

- Classification based on NDVI, SAVI, and NDMI images to detect anomalies.
  [![Output Screenshot](https://i.postimg.cc/HLJ31xJx/Screenshot-2024-08-13-185335.png)](https://postimg.cc/3yT2g3F5)


