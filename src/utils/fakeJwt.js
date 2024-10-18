// fakeJwt.js
export const createFakeJWT = (payload) => {
    const header = {
      alg: "HS256",
      typ: "JWT",
    };
  
    const base64UrlEncode = (obj) =>
      btoa(JSON.stringify(obj)).replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
  
    const encodedHeader = base64UrlEncode(header);
    const encodedPayload = base64UrlEncode(payload);
    
    // Signature is empty for a fake JWT
    return `${encodedHeader}.${encodedPayload}.`;
  };
  