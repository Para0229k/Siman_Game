# Simon Game

為了練習前端網頁設計，用JavaScript, HTML, CSS製作而成的網頁遊戲。  
以經典桌遊Simon Game為主題，規則相同("Do what Simon says")。  
遊戲網址：[Link](https://para0229k.github.io/Siman_Game/)  

<img width="735" height="auto" src="https://github.com/user-attachments/assets/752dca40-7902-4833-a917-2aa7d710b95f" />

> 目錄  
> [1. 檔案結構](#1-檔案結構)  
> [2. 遊戲流程](#2-遊戲流程)  
> [3. 結果展示](#3-結果展示)  

---

## 1. 檔案結構

```
Simon_Game/
├── sounds/       # 按鈕及答錯音效
│   ├── blue.mp3
│   ├── green.mp3
│   ├── red.mp3
│   ├── wrong.mp3  
│   └── yellow.mp3
├── game.js       # 遊戲邏輯
├── index.html    # 網頁素材配置
└── style.css     # 素材外觀設定

```

---

## 2. 遊戲流程

```mermaid
flowchart TD
    Start[按A開始遊戲]
    Simon[Simon出題，隨機一個按鈕亮起]
    Player[玩家記住題目，依照相同的順序按按鈕]
    Complete[進入下一關]
    GameOver[遊戲結束]
    Retry[按任意鍵重新開始]

    Start --> Simon --> Player -- 全部答對 --> Complete -- 題目變難（多一個按鈕） --> Simon
                        Player -- 任一按紐答錯 --> GameOver --> Retry
```

---

## 3. 結果展示

### ▸ 初始畫面
<img width="735" height="auto" src="https://github.com/user-attachments/assets/84168747-8e25-4c24-9370-31cde2e7d1d3" />


### ▸ 遊戲中  
> 顯示操作方式和說明  
<img width="735" height="auto" src="https://github.com/user-attachments/assets/be79ed32-d2ae-4668-83ae-c07f57ef0e05" />


### ▸ 結束畫面  
> 遊戲進行中
<img width="735" height="auto" src="https://github.com/user-attachments/assets/e30902dc-e62b-470c-9d73-8445d02f57b6" />





  


