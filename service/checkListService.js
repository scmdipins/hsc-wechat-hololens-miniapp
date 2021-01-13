const chapterList = [
  {
    "id": 1,
    "title": "Chapter 1 : PM BlockCycle",
    "actions": [{
        "id": 1,
        "name": "1. System Usage",
        "status": ["Pass", "Failed"],
        "result": ""
      },
      {
        "id": 2,
        "name": "2. PM Block(s) Reported PASS",
        "status": ["Pass", "Failed", "手工输入"],
        "result": "Failed",
        "failedReason": "水膜金属针脱落，图像测试未通过。建议保持机房温度稳定。"
      }
    ]
  },
  {
    "id": 2,
    "title": "Chapter2: PreliminaCycle",
    "actions": [{
        "id": 1,
        "name": "1. Basic Checks",
        "status": ["Pass", "Failed"],
        "result": ""
      },
      {
        "id": 2,
        "name": "2. Check Movement From CT Box",
        "status": ["Pass", "Failed", "手工输入"],
        "result": "Failed",
        "failedReason": "水膜金属针脱落，图像测试未通过。建议保持机房温度稳定。"
      },
      {
        "id": 3,
        "name": "3. Software Version",
        "status": ["Pass", "Failed", "手工输入"],
        "result": "Pass",
      },
      {
        "id": 4,
        "name": "4. Scan Seconds",
        "status": ["Pass", "Failed", "手工输入"],
        "result": ""
      },
      {
        "id": 5,
        "name": "5. Wall Box Input Power (cable fasten and identification)",
        "status": ["Pass", "Failed", "手工输入"],
        "result": "",
      },
      {
        "id": 6,
        "name": "6. PE Wall box earth to Block on Gantry （mOhm - 500%）",
        "status": ["Pass", "Failed", "手工输入"],
        "result": "300",
      }
    ]
  }

]

module.exports = {
  chapterList: chapterList
}