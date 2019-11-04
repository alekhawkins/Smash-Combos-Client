let APIURL = '';

switch (window.location.hostname) {
    // local host name of react app
    case 'localhost' || '127.0.0.1':
        // local host name of API
        APIURL = 'http://localhost:3000'
        break;
        //deployed version of react app
        case 'ach-smash-client.herokuapp.com':
        // full url of deployed api
       APIURL = 'https://ach-smash-server.herokuapp.com'
}
export default APIURL;