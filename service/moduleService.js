const chapterList = [{
    "id": 1,
    "title": "Chapter 1 : PM BlockCycle",
    "actions": [{
        "id": 1,
        "name": "1. System Usage",
        "status": ["Pass", "Failed"],
        "result": "",
        "groupId": []
      },
      {
        "id": 2,
        "name": "2. PM Block(s) Reported PASS",
        "status": ["Pass", "Failed", "手动输入"],
        "result": "Failed",
        "failedReason": "水膜金属针脱落，图像测试未通过。建议保持机房温度稳定。"
      }
    ],
    "pics": [{
      "detail": "高压注射器",
      "path": "https://hsc-feili.oss-cn-shanghai.aliyuncs.com/v2/images/assets/male/bg/bg_1.png"
    }, {
      "detail": "桌子/储物柜",
      "path": ""
    }, {
      "detail": "操作台",
      "path": ""
    }, {
      "detail": "机器外壳7S",
      "path": "https://hsc-feili.oss-cn-shanghai.aliyuncs.com/v2/images/assets/male/bg/bg_4.png"
    }]
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
        "status": ["Pass", "Failed"],
        "result": "Failed",
        "failedReason": "水膜金属针脱落，图像测试未通过。建议保持机房温度稳定。"
      },
      {
        "id": 3,
        "name": "3. Software Version",
        "status": ["手动输入"],
        "result": "",
      },
      {
        "id": 4,
        "name": "4. Scan Seconds",
        "status": ["手动输入"],
        "result": ""
      },
      {
        "id": 5,
        "name": "5. Revolution Count",
        "status": ["手动输入"],
        "result": "",
      },
      {
        "id": 6,
        "name": "6. Disk Cleanup Procedures",
        "status": ["Pass", "Failed"],
        "result": "Pass",
      }
    ]
  }

]

const moduleList = [
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  },
  {
    "id": 1, 
    "name": "module1",
    "chapterList": []
  }
]

module.exports = {
  chapterList: chapterList,
  moduleList: moduleList
}