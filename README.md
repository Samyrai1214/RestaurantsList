# Restaurants List

## **Overview**

使用Node.js + Express建置的餐廳列表與搜尋網站，初版之功能僅限於表列餐廳清單及餐廳之詳細資訊，並搜尋既有清單，預計將陸續進行新增功能更新

### Features

- 首頁顯示餐廳列表
- 點擊餐廳列表項目顯示各餐廳詳細資訊
- 搜尋列輸入關鍵字對餐廳名稱或分類進行搜尋
    - 顯示搜尋結果
    - 或分別導向未輸入關鍵字或沒有搜尋結果之提示頁面

## **Environment Setup**

- [Node.js 20.12.1](https://nodejs.org/en/)
- [nodemon 3.1.0](https://www.npmjs.com/package/nodemon)

### **Installation Instructions**

以下流程皆在Terminal進行操作

1. 複製專案至本機：
$ git clone https://github.com/Samyrai1214/RestaurantsList.git
2. 初始化
$ cd RestaurantsList          // 進入專案資料夾
$ npm install                       // 安裝套件
3. 執行專案程式：
$ npm run dev
4. Terminal出現 “express server is running on http://localhost:3000”，表示已經成功執行，開啟任一網頁瀏覽器輸入 [http://localhost:3000](http://localhost:3000) 即可開始使用

## Contributor

- [Samyrai](https://github.com/Samyrai1214)