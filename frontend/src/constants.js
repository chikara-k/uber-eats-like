export const REQUEST_STATE = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  OK: 'OK',
}
// REQUEST_STATEはAPIリクエスト中に画面がいまどういう状態なのか？を知るための状態
// REQUEST_STATE.LOADINGであればAPIリクエスト中としてローディング(くるくる回るUI)を出せる
// REQUEST_STATE.OKであれば成功したアラートを出せる

export const HTTP_STATUS_CODE = {
  NOT_ACCEPTABLE: 406,
}