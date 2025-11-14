import axios from 'axios';

describe('ping route', () => {
  it('reports default status', async () => {
    const res = await axios.get('http://localhost:8080/ping');
    expect(res.status).toEqual(200);
    expect(res.data).toMatchInlineSnapshot(`
      {
        "status": "running",
      }
    `);
  });
});
