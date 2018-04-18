function ShowTime (tuanid, timeDistance) {
  this.tuanid = tuanid
  this.timeDistance = timeDistance * 1000
  this.setTimeShow = function () {
    var timer = document.getElementsByClassName('fblchild')[this.tuanid]
    var strTime
    var intDay, intHour, intMinute, intSecond
    timeDistance = this.timeDistance
    this.timeDistance = this.timeDistance - 1000
    if (timeDistance > 0) {
      intDay = Math.floor(timeDistance / 86400000)
      timeDistance -= intDay * 86400000
      intHour = Math.floor(timeDistance / 3600000)
      timeDistance -= intHour * 3600000
      intMinute = Math.floor(timeDistance / 60000)
      timeDistance -= intMinute * 60000
      intSecond = Math.floor(timeDistance / 1000)
      if (intHour < 10) {
        intHour = '0' + intHour
      }
      if (intMinute < 10) {
        intMinute = '0' + intMinute
      }
      if (intSecond < 10) {
        intSecond = '0' + intSecond
      }
      strTime = intDay + '天' + intHour + '小时' + intMinute + '分钟' + intSecond + '秒'
      timer.innerHTML = strTime
      console.log(strTime)
      var self = this
      setTimeout(function () {
        self.setTimeShow()
      }, 1000)
    } else {
      return false
    }
  }
}
module.exports = ShowTime
