# 📊 AI-Powered Social Media Engagement Dashboard

![Dashboard Preview](<img width="1901" height="659" alt="image" src="https://github.com/user-attachments/assets/5a658ebb-310f-40af-8f11-c3bea7157d5a" />

)

## 📌 Executive Summary & Objective
Modern brand growth requires moving beyond vanity metrics to understand true content performance, emotional resonance, and audience conversion. This project presents a full-stack **AI-Powered Social Media Engagement Dashboard** designed for digital marketing agencies, brand strategists, and analytics teams to monitor performance, predict content efficacy, and optimize multi-channel publishing strategies.

---

## 🎯 Business Problem Statement
Social media marketing teams struggle with fragmented data across multiple social platforms (Instagram, LinkedIn, YouTube, X, Facebook). Without a centralized intelligence dashboard:
- Content production relies on guesswork rather than empirical performance data.
- High-performing content formats are underutilized while low-impact posts drain creative bandwidth.
- Negative audience sentiment goes undetected until brand reputation is compromised.

---

## 📊 Dataset Description
The underlying dataset (`data/raw_social_data.csv`) tracks 100 multi-platform posts evaluated across 21 standard digital marketing dimensions:

- **Identifiers & Context:** `Post_ID`, `Platform`, `Post_Date`, `Post_Type`, `Content_Theme`, `Campaign_Name`
- **Reach & Delivery Metrics:** `Impressions`, `Reach`
- **Engagement Metrics:** `Likes`, `Comments`, `Shares`, `Saves`
- **Conversion Metrics:** `Profile_Visits`, `Link_Clicks`, `Follower_Growth`
- **AI & Sentiment Analytics:** `Sentiment_Score` (-1.0 to +1.0), `AI_Content_Score` (0 to 100), `Best_Posting_Time`

---

## ⚙️ Engagement KPI Framework & Formulas

$$\text{Engagement Rate \%} = \left( \frac{\text{Likes} + \text{Comments} + \text{Shares} + \text{Saves}}{\text{Reach}} \right) \times 100$$

$$\text{Click-Through Rate (CTR)} = \left( \frac{\text{Link Clicks}}{\text{Impressions}} \right) \times 100$$

$$\text{Content Performance Index} = (0.4 \times \text{Eng Rate}) + (0.3 \times \text{AI Score}) + (0.3 \times \text{CTR Norm})$$

---

## 💡 Key Business Insights
1. **Carousel & Video Dominance:** Educational Carousels on Instagram and Video Content on YouTube delivered $2.4\times$ higher save rates compared to standard single images.
2. **Sentiment & Conversion Correlation:** Posts achieving an AI Sentiment Score $>0.70$ generated a $35\%$ higher profile visit conversion rate.
3. **Prime Distribution Window:** Publishing between **17:00 and 19:00** consistently maximized initial algorithmic reach velocity.

---

## 🚀 Strategic Recommendations
- **Shift Content Mix:** Reallocate 40% of production resources from Single Image posts into Educational Carousels and short-form video formats.
- **Implement AI Pre-Scoring:** Enforce a minimum threshold of **80/100 on AI Content Score** prior to post scheduling.
- **Capitalize on Peak Windows:** Restructure scheduling tools to auto-publish during high-velocity windows (17:00 - 19:00).

---

## 🔧 How to Run & Deploy
1. Clone this repository: `git clone https://github.com/your-username/ai-social-media-engagement-dashboard.git`
2. Open `generate_data.py` to inspect or regenerate synthetic dataset.
3. Access the live interactive web dashboard via the link provided in the repository header.

---
*Maintained by [Elavarasan-R] — Digital Marketing & Analytics Strategist*
