const ENV = 'dev';
// const ENV = 'test';
// const ENV = 'prod';

const baseUrl = {
  login: {
    // dev: 'http://192.168.2.139:8080/xcx-website'
    dev: 'http://192.168.2.6:9100/xcx-website',
    test: 'http://192.168.2.143:9100/xcx-website',
    prod: 'https://website.jinghanit.com/xcx-website'
  },
  user: {
    dev: 'http://192.168.2.9:9099/jinghan-user', // 岳传涛
    test: 'http://192.168.2.143:9099/jinghan-user',
    prod: 'https://user.jinghanit.com/jinghan-user'
  },
  website: {
    // dev: 'http://192.168.2.6:9100/xcx-website',
    dev: 'http://192.168.2.132:9080/xcx-website',
    test: 'http://192.168.2.143:9100/xcx-website',
    prod: 'https://website.jinghanit.com/xcx-website'
  },
  file: {
    dev: 'https://file.jinghanit.com/jinghan-fastdfs/fdfs',
    test: 'https://file.jinghanit.com/jinghan-fastdfs/fdfs',
    prod: 'https://file.jinghanit.com/jinghan-fastdfs/fdfs'
  }
};

const b = (c = 'website', e = 'dev') => {
  if (ENV !== 'dev') {
    return baseUrl[c][ENV];
  } else {
    return baseUrl[c][e];
  }
};

const user = b('login') + '/api/user/v2';

const login = b('user') + '/api/user/v2/skip';

const template = b('website') + '/api/template/v2';
const company = b('website') + '/api/company/v2';
const shop = b('website') + '/api/shop/v2';

const file = b('file') + '/upload.shtml';

const access = b('user') + '/api/access/v2';

const count = b('website') + '/api/visit/v2/count';

export default {
  // 注册
  loginInfo: {
    login: user + '/login',
    register: login + '/register',
    smsCode: login + '/getSmsCode'
  },
  template: {
    query: template + '/queryWebTemplate',
    edit: template + '/editWebTemplate',
    leaveWord: template + '/addWebLeaveWord'
  },
  access: {
    token: access + '/fetchToken',
    qrCode: access + '/generateQrCode'
  },
  company: {
    improve: company + '/improve', // 完善信息
    queryCompanyInfo: company + '/queryCompanyInfo',
  },
  shop: {
    queryShopList: shop + '/queryShopList',
    queryShopTemplate: shop + '/queryShopTemplate'
  },
  userCenter: {
    personCenter: b('website') + '/api/user/v2/personCenter',
    formList: b('website') + '/api/user/v2/formList',
    formDetail: b('website') + '/api/user/v2/formDetail'
  },
  file: file,
  count: count
}
