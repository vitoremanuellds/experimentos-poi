import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
    stages: [
        { duration: '60s', target: 100 },
        { duration: '8m', target: 100 },
        { duration: '60s', target: 0 },
    ]
};

export default function () {
    let randomValue = Math.floor((Math.random() * 15000) + 5000);
    let value = randomValue % 15000;

    const res = http.get(`http://150.165.85.97:31334/pi/${value}`);

    check(res, { 'status was 200': (r) => r.status == 200});

    sleep(0.25);
};
