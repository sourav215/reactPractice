## Explain in brief what is node js?

- Node.js is an open-source, cross-platform JavaScript runtime environment built on Chrome's V8 JavaScript engine.
- It allows developers to use JavaScript on the server-side to build scalable and high-performance web applications.
- Node.js provides a non-blocking, event-driven I/O model that makes it lightweight and efficient for handling large volumes of data-intensive applications.
- It also offers a vast array of built-in modules and packages available through the Node Package Manager (npm), making it easy for developers to build robust and complex applications with ease.
- Node.js is popular for its ability to handle real-time, data-intensive applications and its compatibility with a wide range of databases and platforms.

## How is node js non-blocking?

Node.js is designed to be non-blocking, which means that it doesn't block the execution of other processes while waiting for a particular operation to complete. In traditional programming languages, when a program encounters an I/O operation, it blocks the execution of the program until the operation is completed. This can cause delays and affect the overall performance of the application.

Node.js, on the other hand, uses an event-driven, non-blocking I/O model. This means that it can execute multiple requests concurrently without waiting for the results of one request to complete before moving to the next one. When an I/O operation is initiated, Node.js registers a callback function and continues executing the program. Once the I/O operation is completed, Node.js invokes the registered callback function, which handles the result of the operation. This allows Node.js to efficiently handle multiple requests and make the most of the available resources.

In summary, Node.js is non-blocking because it uses an event-driven I/O model, which enables it to execute multiple requests concurrently and efficiently handle I/O operations without blocking the execution of other processes.

## ## What is throughput?

Throughput is used to measure the amount of data that can be processed or transmitted by a system in a given period of time. For example, in a network, throughput may refer to the number of data packets that can be transmitted per second or the amount of data that can be downloaded from the internet in a given time frame.

## How is Node js having high IO throughput?

Node.js is known for its high I/O throughput primarily because of its non-blocking I/O model.

Traditional web servers, such as Apache, use a process-based or thread-based model, where each request is handled by a separate process or thread. These processes or threads block until the I/O operation is complete, which means they can't handle other requests during that time. This can lead to poor performance, especially when dealing with a large number of concurrent requests.

Node.js, on the other hand, uses an event-driven, non-blocking I/O model, which allows it to handle multiple concurrent connections efficiently. Node.js operates on a single thread, and all I/O operations are handled asynchronously using callback functions. When an I/O operation is initiated, the function does not block the thread and instead registers a callback function to be called once the operation is complete. In the meantime, the thread can continue handling other requests.

## ## What are CPU intensive tasks?

CPU intensive tasks are those that require a significant amount of processing power from the CPU. In Node.js, CPU intensive tasks can include:

Data processing: When dealing with large amounts of data, such as parsing large files, searching through a database, or performing complex calculations, the CPU usage can be high.

Image or video processing: Manipulating images or videos, such as resizing, cropping, or compressing, can require a lot of CPU power.

Encryption and decryption: Operations involving encryption and decryption of data require a lot of CPU resources, especially when dealing with large amounts of data.

Compression and decompression: Compressing or decompressing files can also be CPU intensive, especially for large files.

Machine learning and artificial intelligence: Tasks that involve machine learning and artificial intelligence, such as training models, require significant CPU resources.

When performing CPU intensive tasks in Node.js, it's important to keep in mind that Node.js is single-threaded. Therefore, if a CPU intensive task is performed on the main thread, it can block the event loop and slow down the application. To avoid this, it's recommended to offload CPU intensive tasks to separate worker threads or processes, or to use external libraries that are optimized for such tasks.

## How can you end up blocking your main thread in node.js?

To avoid blocking the main thread in Node.js, it's important to use asynchronous programming techniques and to offload heavy computations and I/O operations to worker threads or child processes. Additionally, you can use libraries that are optimized for asynchronous programming and non-blocking I/O operations, such as the built-in fs module, which provides asynchronous versions of file system operations, or external libraries such as async or bluebird.

## ## What is the event loop?

The event loop is a fundamental concept in Node.js that allows it to handle I/O operations and concurrency efficiently. The event loop is responsible for managing the asynchronous execution of code in Node.js.

In Node.js, all I/O operations are non-blocking and asynchronous, which means that when an I/O operation is initiated, Node.js does not wait for it to complete before moving on to the next task. Instead, Node.js registers a callback function to be called once the operation is complete, and the event loop continues to execute other tasks.

The event loop works by continuously checking for pending tasks in the event queue. When a task is completed, its corresponding callback function is added to the event queue, and the event loop executes it as soon as possible.

## ## What are different phases in event loop?

The event loop has several phases:

- Timer phase: This phase checks for timer callbacks that are ready to be executed. If there are any, the event loop executes them.

- I/O polling phase: In this phase, the event loop checks for I/O operations that are ready to be processed. If there are any, their corresponding callbacks are added to the event queue.

- Check phase: This phase checks for `setImmediate` callbacks that are ready to be executed. If there are any, the event loop executes them.

- Close callbacks phase: This phase executes close callbacks for resources that were previously closed, such as sockets or database connections.

By following this cycle, the event loop ensures that Node.js can handle large numbers of concurrent connections efficiently, without creating new threads or processes for each request. This makes Node.js well-suited for building scalable network applications.

## ## What is process.tick?

`process.nextTick()` is a method in Node.js that allows you to schedule a callback function to be executed on the next iteration of the event loop.

Unlike `setImmediate()` or `setTimeout()`, which are scheduled in subsequent event loop iterations, `process.nextTick()` callbacks are executed immediately after the current function finishes executing, but before the event loop continues. This means that they have higher priority than other asynchronous operations scheduled in subsequent event loop iterations.

Here's an example of using `process.nextTick()`:

```js
console.log("start");

process.nextTick(() => {
  console.log("nextTick callback");
});

console.log("end");
```

## When can process.tick starve your event loop?

`process.nextTick()` can be useful for cases where you need to ensure that a callback function is executed immediately after the current function completes, but before any other asynchronous operations are executed. However, it's important to use it judiciously, as it can potentially cause `infinite loops` or other `performance issues` if used excessively.

## How can you make a network request with http module from the backend?

To make a network request with the `http` module in Node.js, you can use the `http.request()` method. Here's an example of how to make a GET request to a remote server using http.request():

```js
const http = require("http");

const options = {
  hostname: "www.example.com",
  port: 80,
  path: "/api/data",
  method: "GET",
};

const req = http.request(options, (res) => {
  console.log(`statusCode: ${res.statusCode}`);

  res.on("data", (data) => {
    console.log(data.toString());
  });
});

req.on("error", (error) => {
  console.error(error);
});

req.end();
```

## How can you create your own events?

```js
const events = require("events");

const emitter = new events.EventEmitter();

// Event Listener
emitter.on("myEvent", () => {
  console.log("This is my event emitter");
});

// Event Emitter
emitter.emit("myEvent");
```

## ## What are clusters?

In Node.js, clusters are a way to take advantage of multi-core systems by creating child processes that run in parallel and share the workload of a single Node.js instance. A cluster is a group of Node.js processes that share the same server port and handle incoming requests.

The `cluster` module is built into Node.js and provides an easy way to create and manage clusters of Node.js processes. When you create a cluster, the master process forks multiple child processes, each of which can handle incoming requests independently. The master process manages the child processes and distributes incoming requests among them.

```js
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`Master process running on PID ${process.pid}`);

  // Fork workers
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
} else {
  console.log(`Worker process running on PID ${process.pid}`);

  // Worker processes can handle server logic here
  const http = require("http");
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end(`Worker ${process.pid} handled this request`);
    })
    .listen(8080);
}
```

In this example, the `master process` checks if it is the master process using the cluster.isMaster property. If it is the master process, it forks multiple `child processes` using the `cluster.fork()` method.

If it is not the master process, it is a worker process, which can handle server logic. In this case, we create an HTTP server using the http module and listen on port 8080. When a request comes in, the worker process sends a response that includes the worker process ID.

By using clusters in Node.js, you can take advantage of multi-core systems and improve the scalability and performance of your Node.js applications.

Here's an example of how to create a simple cluster in Node.js using the cluster module:

## How does your Node.js application handle scale? Elaborate

Handling scale in Node.js applications involves ensuring that your application can handle increasing levels of traffic, requests, and users as your application grows. Here are a few strategies for handling scale in Node.js applications:

- Use clustering: As mentioned in the previous answer, clustering is a built-in Node.js feature that allows you to take advantage of multiple CPU cores on a single machine. By creating multiple child processes that share the same server port, you can distribute incoming requests across multiple processes, improving performance and scalability.

- Load balancing: In addition to clustering, you can also use load balancing to distribute incoming requests across multiple instances of your Node.js application. Load balancing can be accomplished using a dedicated load balancer, or by using a cloud-based load balancer service like AWS Elastic Load Balancer.

- Use caching: Caching frequently-accessed data and responses can significantly improve performance and reduce server load. You can use tools like Redis or Memcached to cache data in memory and reduce the number of requests to your server.

- Optimize database queries: Slow database queries can be a bottleneck for Node.js applications, especially as traffic increases. Optimize your database queries by using appropriate indexes, avoiding unnecessary data fetches, and caching frequently-accessed data.

- Use a CDN: A content delivery network (CDN) can improve the performance and scalability of your Node.js application by caching and serving static assets (like images, videos, and CSS files) from multiple servers located around the world.

- Monitor performance: Monitoring your application's performance can help you identify bottlenecks and potential issues before they become a problem. Use tools like New Relic or AppDynamics to monitor your application's performance, track requests, and identify slow queries or errors.

By using these strategies, you can ensure that your Node.js application can handle increasing levels of traffic and requests, and scale smoothly as your application grows.

## ## What is the difference between readFile and readFileSync?

In Node.js, readFile and readFileSync are two methods for reading files. The main difference between them is that readFile is asynchronous and readFileSync is synchronous.

readFile method takes two arguments, the file path and a callback function. The callback function is called with two arguments: an error object (if there is an error) and the contents of the file. readFile does not block the main thread and allows other code to continue executing while it reads the file.

Here's an example of using readFile:

```js
const fs = require("fs");

fs.readFile("myfile.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
```

## ## What are CORS? How do you configure them? Why do you need them?

CORS stands for Cross-Origin Resource Sharing. It is a security mechanism that restricts web pages from making requests to a different domain than the one that served the web page.

When a web application tries to access resources from a different origin, the browser will typically block the request to prevent unauthorized access. CORS allows a server to explicitly allow cross-origin requests from a web page or domain by setting appropriate HTTP headers.

In Node.js, you can configure CORS using the cors middleware package. Here's an example of how to use it:

```js
const express = require("express");
const cors = require("cors");

const app = express();

// allow all origins
app.use(cors());

// allow specific origin
app.use(
  cors({
    origin: "https://example.com",
  })
);

// allow multiple origins
app.use(
  cors({
    origin: ["https://example.com", "https://subdomain.example.com"],
  })
);
```

The cors middleware can be configured to allow all origins, specific origins, or a list of origins. You can also set other headers like allowed methods and allowed headers.

CORS is necessary to prevent malicious websites from accessing sensitive data from other websites. By restricting cross-origin requests, it provides an extra layer of security and protects users' data. However, it can also be a hindrance for legitimate web applications that need to make cross-origin requests. In these cases, configuring CORS properly can allow legitimate cross-origin requests to be made while maintaining security.

## ## What is rate limiting?

Rate limiting in Node.js is a technique used to control the rate at which incoming requests are processed. It is used to prevent a single client or a group of clients from overwhelming a server with too many requests.

Node.js applications can receive requests from various sources, such as APIs, web browsers, or mobile devices. In some cases, a client may send a large number of requests in a short period, which can cause the server to slow down or even crash. Rate limiting helps to prevent this by limiting the number of requests a client can make over a specific period.

There are various approaches to implement rate limiting in Node.js, including:

Token Bucket Algorithm: It involves keeping a fixed number of tokens in a bucket, with each request requiring a token to proceed. If the bucket runs out of tokens, the client is forced to wait until new tokens are added to the bucket.

Fixed Window Algorithm: It allows a fixed number of requests within a fixed time window. For example, you may allow 5 requests per minute.

Rolling Window Algorithm: It allows a fixed number of requests over a rolling time window. For example, you may allow 10 requests per hour.

Implementing rate limiting can help improve the performance and reliability of your Node.js application by preventing resource exhaustion caused by excessive requests.

## How does middlewares work in express?

In Express, middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. Middleware functions can execute any code, modify the request and response objects, and end the request-response cycle by sending a response to the client or calling the next middleware function.

## ## What is the difference between Encryption and Hashing?

Encryption and hashing are two different techniques used to secure and protect data, but they serve different purposes and operate differently.

Encryption is the process of transforming plain text into ciphertext using an encryption algorithm and a secret key. The ciphertext can only be decrypted back to plain text using the same key that was used for encryption. Encryption is commonly used for protecting data during transmission or storage. When data is encrypted, it can be transmitted or stored securely without fear of interception or unauthorized access.

Hashing, on the other hand, is a one-way process of generating a fixed-length string of characters (hash) from plain text using a hash function. The hash is unique to the input and cannot be reversed to get the original input. Hashing is commonly used for verifying the integrity of data or passwords. When data is hashed, the hash value can be stored, and later when the data needs to be verified, the input data can be hashed again and compared to the stored hash value.

The key differences between encryption and hashing are:

1. Purpose: Encryption is used to protect data during transmission or storage, while hashing is used to verify the integrity of data or passwords.
2. Reversibility: Encryption is reversible, meaning the ciphertext can be decrypted back to the original plain text using the same key. Hashing is one-way, meaning the hash value cannot be reversed to get the original input.
3. Output: Encryption produces ciphertext, which is typically longer than the input plain text. Hashing produces a fixed-length hash value, which is typically shorter than the input plain text.
4. Security: Encryption provides a higher level of security than hashing, as it can protect data during transmission or storage. Hashing is less secure than encryption, as it cannot protect data during transmission or storage.

In summary, encryption and hashing are both important techniques for securing and protecting data, but they serve different purposes and operate differently. Encryption is used to protect data during transmission or storage, while hashing is used to verify the integrity of data or passwords.

## ## What is the difference between https and http?

HTTP and HTTPS are both protocols used for sending and receiving data over the internet. However, there are some important differences between the two:

Security: HTTP is an unsecured protocol, meaning that any data transmitted over it is not encrypted and can be intercepted by malicious actors. HTTPS, on the other hand, is a secure protocol that uses SSL/TLS encryption to protect data in transit. This makes HTTPS more secure than HTTP and is the reason why most websites today use HTTPS instead of HTTP.

Port: HTTP typically uses port 80, while HTTPS typically uses port 443. This is because HTTPS uses SSL/TLS encryption, which requires an additional layer of security that is not provided by HTTP.

URL: The URL for an HTTP website starts with "http://", while the URL for an HTTPS website starts with "https://". This indicates that the website is using the secure HTTPS protocol.

Certificate: In order to use HTTPS, a website must have an SSL/TLS certificate. This certificate verifies the identity of the website and is issued by a trusted Certificate Authority (CA). When a user visits an HTTPS website, their browser checks the website's SSL/TLS certificate to ensure that the website is authentic and that the data being transmitted is encrypted.

In summary, HTTPS is a more secure protocol than HTTP because it uses SSL/TLS encryption to protect data in transit. HTTPS also requires an SSL/TLS certificate, which verifies the identity of the website and is issued by a trusted CA. When it comes to ports and URLs, HTTP typically uses port 80 and starts with "http://", while HTTPS typically uses port 443 and starts with "https://".

## ## What is TLS?

TLS (Transport Layer Security) is a cryptographic protocol that provides security and privacy for data transmitted over the internet. It is the successor to SSL (Secure Sockets Layer) and is used to secure various types of communication, including email, web browsing, messaging, and voice over IP.

TLS uses a combination of asymmetric and symmetric encryption to protect data in transit between two endpoints, such as a web browser and a web server. When a TLS connection is established, the two endpoints negotiate a shared secret key that is used to encrypt and decrypt the data. This shared secret key is unique to the current session and is not used for any other sessions.

TLS also provides other security features such as integrity protection, which ensures that the data has not been tampered with during transmission, and authentication, which verifies the identity of the server and/or client. Authentication is typically achieved using digital certificates, which are issued by trusted Certificate Authorities (CAs) and used to verify the identity of the server.

TLS has several versions, with each version providing different levels of security and encryption strength. The latest version of TLS is TLS 1.3, which was released in 2018 and provides stronger encryption and better performance than previous versions.

In summary, TLS is a cryptographic protocol used to provide security and privacy for data transmitted over the internet. It uses encryption, integrity protection, and authentication to protect data in transit between two endpoints. TLS is an essential component of internet security and is used to secure various types of communication, including email, web browsing, messaging, and voice over IP.

## ## What is AES?

AES (Advanced Encryption Standard) is a symmetric encryption algorithm used to protect sensitive data. It is one of the most widely used encryption algorithms today and is used to secure various types of data, including financial transactions, government communications, and personal data.

AES is a block cipher, meaning that it encrypts data in fixed-size blocks. It uses a symmetric key, which means that the same key is used for both encryption and decryption. The strength of AES encryption depends on the key size, with larger key sizes providing greater security.

AES has three different key sizes: 128 bits, 192 bits, and 256 bits. The larger the key size, the stronger the encryption. AES is a standardized encryption algorithm and is approved by the U.S. government for protecting classified information.

AES works by using a series of mathematical operations to scramble the data. The data is first divided into blocks of a fixed size, and each block is then encrypted using the key. The algorithm uses a series of substitution, permutation, and XOR operations to encrypt each block.

Decryption is the reverse process of encryption, where the encrypted data is decrypted using the same key. AES is a symmetric encryption algorithm, which means that the same key is used for both encryption and decryption.

In summary, AES is a widely used symmetric encryption algorithm used to protect sensitive data. It uses a fixed block size and a symmetric key to encrypt and decrypt data. AES has three different key sizes: 128 bits, 192 bits, and 256 bits, with larger key sizes providing greater security.

## ## What is JWT Token? Why do we need to use JWT? ## What are some pros and cons?

JWT (JSON Web Token) is a standard for securely transmitting information between parties as a JSON object. JWT is commonly used as a means of authentication and authorization in web applications.

A JWT token consists of three parts: a header, a payload, and a signature. The header contains metadata about the token, such as the algorithm used to sign the token. The payload contains the claims, or information about the user or entity, such as the user ID or permissions. The signature is used to verify the authenticity of the token.

JWT tokens are often used as a replacement for traditional session-based authentication. This is because JWT tokens are stateless, meaning that the server does not need to store any session information. Instead, the client sends the token with each request, and the server can use the information in the token to authenticate and authorize the user.

Some of the benefits of using JWT include:

Stateless: As mentioned earlier, JWT is stateless, which means that the server does not need to store session information. This can simplify the architecture of the application and improve scalability.

Cross-domain: JWT can be used across different domains, which can simplify the integration of different services.

Decentralized: JWT is decentralized, meaning that the token can be verified without contacting a central server. This can improve the performance of the application.

However, there are also some potential drawbacks of using JWT, such as:

Token size: JWT tokens can be larger than session tokens, which can increase the size of the request/response payload.

Security: If the token is compromised, an attacker could gain access to sensitive information or resources. Therefore, it is important to use secure transmission protocols and store the token securely.

Token revocation: JWT tokens cannot be easily revoked once they are issued. Therefore, if a token is compromised, the user may have to wait until the token expires before it can be revoked.

In summary, JWT is a standard for securely transmitting information between parties as a JSON object. JWT tokens can be used as a means of authentication and authorization in web applications. Some of the benefits of using JWT include being stateless, cross-domain, and decentralized, while some potential drawbacks include token size, security, and token revocation.

## ## What is salting?

Salting is a technique used to increase the security of password storage. It involves adding a random string of characters, called a salt, to the password before it is hashed. The resulting hash is then stored in a database or other storage medium.

The purpose of salting is to make it more difficult for attackers to use precomputed tables, or rainbow tables, to crack passwords. Rainbow tables are large tables of precomputed hashes for common passwords, which can be used to quickly crack hashed passwords. By adding a salt to each password before it is hashed, the resulting hash will be unique, even for the same password. This makes it much more difficult for attackers to use rainbow tables to crack the password.

The salt should be unique and random for each password, and should be long enough to provide a high degree of randomness. A common practice is to use a cryptographically secure random number generator to generate the salt.

When a user enters their password, the salt is retrieved from the database and combined with the entered password. The resulting hash is then compared to the stored hash to verify the password. Since the salt is unique for each password, even if two users have the same password, their hashes will be different.

```js
const bcrypt = require("bcrypt");
const saltRounds = 10; // number of rounds used to generate salt

// Generate salt and hash password
bcrypt.genSalt(saltRounds, function (err, salt) {
  bcrypt.hash("password123", salt, function (err, hash) {
    // Store salt and hash in database
  });
});

// Retrieve salt and hash from database and verify password
bcrypt.compare("password123", hash, function (err, result) {
  // result is true if password matches hash, false otherwise
});
```

In this example, bcrypt.genSalt() generates a salt using 10 rounds of hashing, and bcrypt.hash() uses the salt to hash the password "password123". The resulting salt and hash are then stored in a database.

Later, when the user enters their password, bcrypt.compare() retrieves the salt and hash from the database and verifies the password by comparing the computed hash with the stored hash. Since the salt used to hash the password is unique, even if an attacker knows the hash of the password, they cannot use precomputed tables to crack the password.

In summary, salting is a technique used to increase the security of password storage. It involves adding a random string of characters to the password before it is hashed. This makes it more difficult for attackers to use precomputed tables to crack passwords, and helps protect user accounts from being compromised.

## Where do we store salt?

The salt should be stored securely in the same database or storage medium as the hashed password. Typically, the salt is stored alongside the hashed password in a separate field of the user record in the database.

It is important to ensure that the salt is kept secret and cannot be easily accessed by attackers. Therefore, the salt should be encrypted or hashed in a separate column in the database, and access to the salt column should be restricted to authorized users or roles.

In general, the salt should be treated as a secret key, just like a password, and should be protected accordingly. Storing the salt securely helps prevent attackers from using precomputed tables to crack passwords, and helps ensure the security of user accounts.

## ## What is the difference between authorisation and Authentication?

Authentication and authorization are two distinct but related concepts in computer security.

Authentication is the process of verifying the identity of a user or entity. It involves checking that the user or entity is who they claim to be, typically by requiring them to provide some form of identification, such as a username and password, a fingerprint, or a smart card. The goal of authentication is to establish trust in the identity of the user or entity, and to ensure that they have the necessary permissions to access the requested resource or service.

Authorization, on the other hand, is the process of determining what actions a user or entity is allowed to perform on a given resource or service. It involves checking whether the user or entity has the necessary permissions to access, modify, or delete the resource or service. The goal of authorization is to enforce the security policy and protect the resource or service from unauthorized access or modification.

In summary, authentication is the process of verifying the identity of a user or entity, while authorization is the process of determining what actions a user or entity is allowed to perform on a given resource or service. Authentication establishes trust in the identity of the user, while authorization enforces the security policy and protects the resource or service.

Here are some examples of authentication in computer security:

1. Username and password: This is the most common form of authentication, where a user is required to enter a username and password to access a system or service. The system verifies the username and password against a database of authorized users and grants access if the credentials are valid.

2. Two-factor authentication: This involves requiring a second form of identification, in addition to the username and password, to verify the identity of the user. This can be a fingerprint, a smart card, a security token, or a code sent to the user's mobile phone.

3. Biometric authentication: This involves using a physical characteristic of the user, such as their fingerprint, voice, or iris, to verify their identity. Biometric authentication can be more secure than traditional username and password authentication, as it is more difficult for an attacker to replicate a physical characteristic than to guess a password.

4. Single sign-on (SSO): This allows a user to authenticate once and then access multiple systems or services without having to enter their credentials again. SSO can improve convenience for users, but can also increase the risk of a security breach if the user's credentials are compromised.

5. OAuth: This is an authentication and authorization protocol used to grant third-party applications access to user data without requiring the user to share their username and password with the application. OAuth allows users to grant limited access to their data, and can help improve security and privacy for users.

Here are some examples of authorization in computer security:

1. File and folder permissions: This involves setting permissions on files and folders to control who can read, write, or execute them. The system administrator can grant or deny access to specific files and folders based on the user's role or job function.

2. Role-based access control (RBAC): This is a method of restricting access to resources based on the user's role within the organization. Users are assigned to roles, and each role is granted a set of permissions to access specific resources.

3. Attribute-based access control (ABAC): This is a more flexible method of authorization that takes into account multiple factors, such as the user's role, job function, location, time of day, and other attributes. ABAC can provide more fine-grained control over access to resources, but can also be more complex to manage.

4. Network access control (NAC): This involves restricting access to a network based on the user's identity or the security posture of their device. NAC can help prevent unauthorized access to the network and protect against malware and other threats.

5. API access control: This involves controlling access to web APIs based on the user's identity or the application that is accessing the API. API access control can help prevent unauthorized access to sensitive data or resources, and ensure that APIs are used in a secure and responsible manner.

## ## What is the difference between JS on the browser and node?

JavaScript (JS) is a programming language that can be used both on the browser and on the server-side using Node.js. Although both browser-side and server-side JavaScript share the same language, there are some key differences between the two environments.

Execution environment: JavaScript on the browser runs inside the user's web browser, while JavaScript on the server runs in a server-side environment provided by Node.js.

API differences: The browser environment provides a set of APIs for interacting with the Document Object Model (DOM), manipulating browser behavior, and making network requests. On the other hand, Node.js provides a set of APIs for working with files, streams, network sockets, and other server-side functionalities.

Concurrency model: In the browser, JavaScript code runs in a single thread, and long-running tasks can block the main thread and cause the browser to become unresponsive. In Node.js, JavaScript code can be executed asynchronously using callbacks, promises, or async/await syntax, allowing for more efficient use of system resources and better performance.

Modules: The browser environment supports a limited set of modules that can be loaded using script tags or through modern JavaScript features like ES modules. In Node.js, modules can be loaded using the CommonJS or ES module formats, and can be used to organize and share code between different parts of an application.

In summary, although JavaScript is the same language on both the browser and the server, the execution environment, available APIs, concurrency model, and module system differ between the two environments.

## ## What is V8?

V8 is an open-source JavaScript engine developed by Google that is used in Google Chrome and Node.js. It is written in C++ and is designed to execute JavaScript code at high speeds.

V8 compiles JavaScript code into machine code just-in-time (JIT) when it is executed, which allows it to execute code much faster than interpreted JavaScript engines. It also uses a technique called hidden class optimization to improve the performance of object creation and property access.

In addition to standard JavaScript features, V8 also supports a number of advanced features such as arrow functions, classes, and template literals. V8 also includes a number of debugging and profiling tools, such as the Chrome DevTools, which allow developers to inspect and analyze the performance of their JavaScript code.

Because V8 is open-source, it can be used by other projects and platforms outside of Chrome and Node.js, such as the Electron framework for building desktop applications, and the Deno runtime for running JavaScript and TypeScript code outside of a browser environment.

## What is Caching? How can you save money with Caching?

Caching is the process of storing frequently accessed data in a cache to improve the performance of an application or system. When data is requested, the application first checks the cache to see if the data is available there. If the data is found in the cache, it is returned to the requester without having to fetch it from the original data source, which can significantly reduce response time and improve performance.

Caching is used in many different contexts, including web browsers, operating systems, databases, and content delivery networks (CDNs). In web browsers, for example, caching is used to store website data such as images, videos, and scripts, so that they don't have to be downloaded from the web server every time the user visits a page. In operating systems, caching is used to store frequently accessed data in memory, so that it can be quickly retrieved by the CPU. In databases, caching is used to store the results of frequently accessed queries, so that they can be quickly retrieved by future queries.

Caching can save money in a number of ways:

- Reduced server load: When frequently requested data is cached, it reduces the load on the server since the server does not have to fetch the data from the original data source every time it is requested. This can reduce the cost of running and maintaining servers.

- Faster response time: Caching can significantly reduce response time, which can improve the user experience and lead to increased engagement and sales. Faster response times can also reduce the likelihood of users abandoning a website or application due to slow performance.

- Reduced bandwidth usage: Caching can reduce the amount of data that needs to be transmitted over the network, which can save on bandwidth costs. This is especially useful for large media files or other data-intensive applications.

- Improved scalability: Caching can help improve the scalability of an application or system by reducing the load on the server and allowing more users to access the system at the same time without impacting performance.

Overall, caching can help improve performance, reduce server load, and save on costs related to running and maintaining servers and bandwidth usage.

## What is load balancing?

Load balancing is the process of distributing workloads across multiple computing resources, such as servers, to optimize resource utilization, maximize throughput, minimize response time, and avoid overload.

In a load-balanced environment, incoming requests are first received by a load balancer, which then routes them to the appropriate computing resources based on predefined criteria such as server availability, server performance, network congestion, geographic location, or request type. This ensures that each computing resource is used efficiently and that no single resource is overloaded with more work than it can handle.

Load balancing is commonly used in web applications, where multiple servers may be needed to handle high traffic volumes or to provide redundancy and fault tolerance. In this scenario, a load balancer sits in front of multiple web servers and distributes incoming requests among them, ensuring that no single server is overwhelmed by the incoming traffic.

Load balancing can be implemented using hardware or software-based solutions, and can be configured to use different algorithms for routing requests, such as round-robin, least connections, IP hash, or custom criteria.

Overall, load balancing is a critical component of modern computing systems, helping to ensure that resources are used efficiently and that applications are able to handle large volumes of traffic without sacrificing performance or reliability.

## What is CAP Theorem?

## What is PACELC Theorem?

## What is Eventual Consistency?

## What is Strong Consistency?

## What are the different types of databases?

## What are message queues?

## Which service by Amazon Web Services (AWS) can you use for Queues?

## What is Pub Sub ?

## What are webhooks?

## What is Docker? Why do we use it?
Docker is an open-source containerization platform that allows you to develop, deploy, and run applications in containers. A container is a lightweight and portable software package that includes everything needed to run an application, including the code, dependencies, libraries, and system tools, in a single package.

## What is S3 Service in AWS?

## What is EC2 Instance in AWS?

## What is Cloudfront in AWS?

## What is Route 53 In AWS?

## What are ELBs in AWS?

## What is a reverse proxy
