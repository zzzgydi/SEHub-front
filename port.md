# 接口文档

## 新增

Notice 表新增 sponsorName，sponsorDepart，time 三个字段

## 接口:登录

- url: '/api/login'
- params: account, pwd
- return: state

## 接口:首次提交申请

- url: '/api/apply/submit'
- params:
  - type:string 表单类型 标识哪种申请表
  - form:object 表单对象 对应申请表的信息
- return:
  - state 状态码 说明是否发布成功

> // 后端处理过程
>
> 1. ApplyCommonInfo.status = submit // 申请表状态为 submit
> 2. ApplyCommonInfo.postStuid = jwt.stuid // 申请人和最新修改人的学号从 jwt 中取
> 3. ApplyCommonInfo.reviseStuid = jwt.stuid
> 4. ApplyCommonInfo.\*time = new Date().toString() // 申请时间和最新修改时间在后端取
> 5. ApplyCommonInfo 其他字段为空
> 6. 根据传入参数 type，向对应的申请表中添加对应字段的数据，数据在 form 对象中
> 7. 根据参数 type，获取所有有权限收到通知的人的学号
> 8. 对每个学号，新建一条 Notice 的数据
> 9. Notice.type = XXX_SUBMIT // 枚举量
> 10. Notice.sponsor = jwt.stuid
> 11. 在 User 表中根据学号获取发起人的名字和部门名称，填写 sponsorName 和 sponsorDepart 字段
> 12. Notice.acceptor = each result // step 8
> 13. Notice.xxid = XXXApy.id // 信息的 id 是表单数据的 id
> 14. 回传后端操作结果 —— state // 系统状态码

上传参数 type 的值:

- activity // 活动申请表
- etiquette // 礼仪
- presenter // 主持人
- newmedia // 新媒体
- reporter // 记者团
- publicity // 宣传
- material // 秘书
- ticket //讲座票

> Notice.type 根据这个来命名

## 接口:获取所有通知

- method: GET
- url: '/api/notices'
- return:
  - state // 状态码
  - notices: array
    - noticeType // 通知类型
    - sponsorName // 发起者姓名
    - sponsorDepart // 发起者所在部门
    - apyID // 表单 ID
    - time // 按时间先后排序返回
    - remarks // 通知的文字表述
