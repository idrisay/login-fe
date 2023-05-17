async function postData(url, data) {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (response.ok) {
    let res = await response.json();
    return { response: res, success: true };
  } else {
    let res = await response.json();
    return { response: res, success: false };
  }
}

export { postData };
