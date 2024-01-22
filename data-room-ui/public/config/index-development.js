window.ENV = 'development'
var developmentConfig = {
  baseUrl: 'http://192.168.1.130:8081/bigScreenServer',
  fileUrlPrefix: 'http://192.168.1.130:8081/bigScreenServer' + '/static'
}
// 必须的
window.CONFIG = configDeepMerge(window.CONFIG, developmentConfig)
