import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '60s', target: 25 },
        { duration: '8m', target: 25 },
        { duration: '60s', target: 0 },
    ]
};

export default function () {
    let randomValue = Math.floor((Math.random() * 10000) + 1000);
    let value = randomValue % 10000;

    const res = http.get(`http://150.165.85.97:31334/pi/${value}`);

    check(res, { 'status was 200': (r) => r.status == 200});

    sleep(1);
};
