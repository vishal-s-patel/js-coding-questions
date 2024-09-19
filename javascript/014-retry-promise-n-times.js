//delay fn
const wait = (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

const retryWithDelay = (
  operation,
  retries = 3,
  delay = 50,
  finalErr = "Retry failed"
) =>
  new Promise((resolve, reject) => {
    return operation()
      .then(resolve)
      .catch((reason) => {
        if (retries > 0) {
          return wait(delay)
            .then(
              retryWithDelay.bind(null, operation, retries - 1, delay, finalErr)
            )
            .then(resolve)
            .catch(reject);
        }
        return reject(finalErr);
      });
  });

const getTestFunc = () => {
  let callCounter = 0;
  return async () => {
    callCounter += 1;
    if (callCounter < 5) {
      throw new Error("Not yet");
    }
  };
};

const test = async () => {
  await retryWithDelay(getTestFunc(), 10);
  console.log("success");
  await retryWithDelay(getTestFunc(), 3);
  console.log("will fail before getting here");
};

test().catch(console.error);
