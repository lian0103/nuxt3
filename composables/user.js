import axios from 'axios';
import qs from 'qs';

export const useUserInfo = () => {
  const fetchUserinfoFromLine = async ({ code }) => {
    const config = useRuntimeConfig();
    const params = qs.stringify({
      grant_type: 'authorization_code',
      code: code,
      client_id: config.LINE_CHANNEL_ID,
      redirect_uri: config.LINE_CALLBACK_URI,
      client_secret: config.LINE_CLIENT_SECRET,
    });
    // console.log('params',params)

    return new Promise((resolv, reject) => {
      axios
        .post('https://api.line.me/oauth2/v2.1/token', params)
        .then((res) => {
          let { id_token } = res.data;
          if (id_token) {
            const params2 = qs.stringify({
              id_token,
              client_id: config.LINE_CHANNEL_ID,
            });
            // console.log('params', params2);
            axios
              .post('https://api.line.me/oauth2/v2.1/verify', params2)
              .then((res2) => {
                // console.log(res2);
                resolv(res2);
              });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  };

  return { fetchUserinfoFromLine };
};
