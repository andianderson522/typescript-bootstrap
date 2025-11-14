import axios from 'axios';

describe('smoke test', () => {
  it('index responds', async () => {
    const res = await axios.get('http://localhost:8080');
    expect(res.status).toEqual(200);
    expect(res.data).toEqual(
      'Welcome to the Condé Nast Typescript bootstrap project.'
    );
  });
});
