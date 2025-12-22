# Premier League Player Dashboard ⚽

A web-based interactive dashboard to visualize Premier League player statistics for the 2024-25 season using Streamlit.

---

## 📋 Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Data Source](#data-source)
- [Available Statistics](#available-statistics)
- [Updating Data](#updating-data)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- 📊 View comprehensive stats for 574+ Premier League players
- 🔍 Interactive player selection via dropdown menu
- 📈 Visual charts displaying Goals and Assists
- 🔄 Real-time data from FBref via Kaggle API
- 💻 Clean and intuitive web interface
- ⚡ Fast data loading and visualization

---

## 🔧 Prerequisites

Before you begin, ensure you have the following installed:

- **Python 3.8 or higher**
- **pip** (Python package installer)
- **Internet connection** (for downloading player data)

### Check Python Installation

```powershell
python --version
```

If Python is not installed, download it from [python.org](https://www.python.org) and ensure you check "Add Python to PATH" during installation.

---

## 📦 Installation

### 1. Clone or Download This Repository

```powershell
cd C:\Users\YourUsername\Desktop
git clone https://github.com/yourusername/Prem--Player-Dashboard.git
cd Prem--Player-Dashboard
```

Or simply download and extract the ZIP file.

### 2. Install Required Python Packages

```powershell
python -m pip install streamlit pandas matplotlib kagglehub
```

**Packages installed:**

- **streamlit** - Web application framework
- **pandas** - Data manipulation and analysis
- **matplotlib** - Data visualization
- **kagglehub** - Kaggle dataset downloader

---

## 🚀 Usage

### Step 1: Download Latest Player Data

Run the scraper script to fetch the most recent Premier League statistics:

```powershell
python scrape_fbref.py
```

**Expected Output:**

```
Downloading dataset from Kaggle...
✓ Dataset downloaded successfully
✓ Processing player data...
✓ Saved 574 players to premier_league_stats.csv
```

This creates/updates the `premier_league_stats.csv` file with real 2024-25 season data.

### Step 2: Launch the Dashboard

```powershell
streamlit run app.py
```

**Expected Output:**

```
You can now view your Streamlit app in your browser.

Local URL: http://localhost:8501
Network URL: http://192.168.1.X:8501
```

The dashboard will automatically open in your default web browser.

### Step 3: Explore the Dashboard

1. Use the dropdown menu to select a player
2. View their statistics in the main panel
3. Analyze the Goals vs Assists chart
4. Switch between different players to compare stats

---

## 📁 Project Structure

```
Prem--Player-Dashboard/
│
├── app.py                        # Streamlit web application
├── scrape_fbref.py               # Data scraper script
├── premier_league_stats.csv      # Player statistics (generated)
└── README.md                     # Project documentation
```

### File Descriptions

| File | Description |
|------|-------------|
| `app.py` | Streamlit web application that displays the interactive dashboard |
| `scrape_fbref.py` | Python script that downloads and processes player data from Kaggle |
| `premier_league_stats.csv` | CSV file containing player statistics (generated after running scraper) |
| `README.md` | Complete project documentation and usage instructions |

---

## 📊 Data Source

Player statistics are sourced from FBref's Premier League dataset via Kaggle:

**Dataset:** FBref Premier League 2024-25 Player Stats

- **Data Provider:** FBref (Football Reference)
- **Season:** 2024-25 Premier League
- **Last Updated:** Automatically fetched via Kaggle API
- **Total Players:** 574+

---

## 📈 Available Statistics

The dashboard displays the following player metrics:

| Statistic | Description |
|-----------|-------------|
| **Player** | Full player name |
| **Team** | Current club/squad |
| **Goals** | Total goals scored this season |
| **Assists** | Total assists provided this season |
| **Appearances** | Total matches played (MP) |
| **Minutes** | Total minutes played this season |

---

## 🔄 Updating Data

To refresh the dashboard with the latest Premier League statistics:

### 1. Re-run the Scraper

```powershell
python scrape_fbref.py
```

This will download the most recent data and overwrite `premier_league_stats.csv`.

### 2. Refresh the Dashboard

If the dashboard is already running, simply refresh your browser (F5 or Ctrl+R).

If not running, launch it again:

```powershell
streamlit run app.py
```

**Tip:** Run the scraper weekly to keep stats up-to-date with the latest matches.

---

## 🛠️ Troubleshooting

### Issue: "Module not found" Error

**Error Message:**

```
ModuleNotFoundError: No module named 'streamlit'
```

**Solution:**

```powershell
python -m pip install streamlit pandas matplotlib kagglehub
```

---

### Issue: Dashboard Won't Start

**Solution:**

1. Verify Python is installed: `python --version`
2. Check if Streamlit is installed: `pip list | findstr streamlit`
3. Try running with: `python -m streamlit run app.py`

---

### Issue: No Data Showing / Empty Dashboard

**Cause:** `premier_league_stats.csv` file is missing or empty.

**Solution:**

```powershell
python scrape_fbref.py
```

Wait for the download to complete, then restart the dashboard.

---

### Issue: "pip is not recognized"

**Solution:**

1. Reinstall Python from [python.org](https://www.python.org)
2. During installation, check "Add Python to PATH"
3. Restart your terminal/command prompt

---

### Issue: Port Already in Use

**Error Message:**

```
OSError: [Errno 98] Address already in use
```

**Solution:**

1. Close the existing Streamlit instance
2. Or use a different port: `streamlit run app.py --server.port 8502`

---

### Issue: Kaggle Download Fails

**Possible Causes:**

- No internet connection
- Kaggle API rate limit
- Dataset removed or renamed

**Solution:**

1. Check internet connection
2. Wait a few minutes and try again
3. Verify dataset still exists at Kaggle

---

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add new feature'`)
5. Push to the branch (`git push origin feature/improvement`)
6. Create a Pull Request

### Ideas for Contributions

- Add more player statistics (xG, passes, tackles, etc.)
- Implement team-based filtering
- Add player comparison feature
- Create advanced visualizations
- Add export functionality (PDF, Excel)
- Implement search functionality

---

## 📝 License

This project is for educational purposes only.

**Data Attribution:**

- Player statistics © FBref.com
- Dataset provided via Kaggle user siddhrajthakor

**Disclaimer:** This project is not affiliated with or endorsed by the Premier League, FBref, or Kaggle.

---

## 📞 Support

If you encounter any issues or have questions:

- Check the [Troubleshooting](#troubleshooting) section
- Review the [Usage](#usage) instructions
- Open an issue on GitHub

---

## 🎯 Quick Start Commands

```powershell
# Download data
python scrape_fbref.py

# Launch dashboard
streamlit run app.py

# Install dependencies
python -m pip install streamlit pandas matplotlib kagglehub
```

---

Made with ❤️ for Premier League fans
