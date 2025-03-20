# SmartStat - API-Driven Average Calculator Microservice
<img width="1388" alt="Screenshot 2025-03-20 at 7 41 44 PM" src="https://github.com/user-attachments/assets/b2b08388-3acb-4ed6-a3ba-c73a0fea0c24" />
<img width="1388" alt="Screenshot 2025-03-20 at 7 41 54 PM" src="https://github.com/user-attachments/assets/fbcf3c12-8128-4327-a145-a8d8738a8adc" />


## 📋 What is SmartStat?

SmartStat is a streamlined microservice that calculates moving averages from numbers pulled from external data sources. It's designed to be straightforward, reliable, and fast.

## ✨ Key Features

- **Smart Average Calculator**: Computes averages from streams of numbers
- **Efficient Memory Usage**: Keeps only the 10 most recent unique numbers
- **Handles Duplicates**: Automatically filters out repeated values
- **Timeout Protection**: Gracefully manages connection issues
- **Fast Response Times**: Built for performance

## 🚀 Why Use SmartStat?

SmartStat simplifies the process of tracking averages across data streams. Whether you're monitoring financial metrics, sensor readings, or any numerical data, SmartStat provides a clean, easy way to maintain rolling averages without the complexity.

## 💼 Use Cases

- **Business Analytics**: Track average transaction values
- **IoT Applications**: Monitor average sensor readings
- **Performance Metrics**: Calculate average response times
- **Financial Tools**: Compute moving averages for market data

## 📊 How It Works

1. SmartStat connects to your external API
2. It retrieves numerical data at regular intervals
3. Numbers are processed through a sliding window (latest 10 unique values)
4. A continuously updated average is made available through a simple API

## 📝 Getting Started

SmartStat is ready to use with minimal setup. Simply deploy the service, configure your external API endpoint, and start retrieving averages.

---

*SmartStat - Making data averages simple and accessible*
