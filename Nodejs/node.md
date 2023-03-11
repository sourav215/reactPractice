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

## What is throughput?

Throughput is used to measure the amount of data that can be processed or transmitted by a system in a given period of time. For example, in a network, throughput may refer to the number of data packets that can be transmitted per second or the amount of data that can be downloaded from the internet in a given time frame.

## How is Node js having high IO throughput?

Node.js is known for its high I/O throughput primarily because of its non-blocking I/O model.

Traditional web servers, such as Apache, use a process-based or thread-based model, where each request is handled by a separate process or thread. These processes or threads block until the I/O operation is complete, which means they can't handle other requests during that time. This can lead to poor performance, especially when dealing with a large number of concurrent requests.

Node.js, on the other hand, uses an event-driven, non-blocking I/O model, which allows it to handle multiple concurrent connections efficiently. Node.js operates on a single thread, and all I/O operations are handled asynchronously using callback functions. When an I/O operation is initiated, the function does not block the thread and instead registers a callback function to be called once the operation is complete. In the meantime, the thread can continue handling other requests.

## What are CPU intensive tasks?

CPU intensive tasks are those that require a significant amount of processing power from the CPU. In Node.js, CPU intensive tasks can include:

Data processing: When dealing with large amounts of data, such as parsing large files, searching through a database, or performing complex calculations, the CPU usage can be high.

Image or video processing: Manipulating images or videos, such as resizing, cropping, or compressing, can require a lot of CPU power.

Encryption and decryption: Operations involving encryption and decryption of data require a lot of CPU resources, especially when dealing with large amounts of data.

Compression and decompression: Compressing or decompressing files can also be CPU intensive, especially for large files.

Machine learning and artificial intelligence: Tasks that involve machine learning and artificial intelligence, such as training models, require significant CPU resources.

When performing CPU intensive tasks in Node.js, it's important to keep in mind that Node.js is single-threaded. Therefore, if a CPU intensive task is performed on the main thread, it can block the event loop and slow down the application. To avoid this, it's recommended to offload CPU intensive tasks to separate worker threads or processes, or to use external libraries that are optimized for such tasks.

## How can you end up blocking your main thread in node.js?

## What is the event loop?

## What are different phases in event loop?

## What is process.tick?

## When can process.tick starve your event loop?

## What is the difference between setTimeout and setInterval?

## How can you make a network request with http module from the backend?

## How can you create your own events?

## What are clusters?

## How does your Node.js application handle scale? Elaborate

## What is the difference between readFile and readFileSync?

## What are CORS? How do you configure them? Why do you need them?

## What is rate limiting?

## How does middlewares work in express?

## What is the difference between Encryption and Hashing?

## What is the difference between https and http?

## What is TLS?

## What is AES?

## What is JWT Token? Why do we need to use JWT? What are some pros and cons?

## What is salting? Where do we store salt?

## What is the difference between authorisation and Authentication?

## What is the difference between JS on the browser and node?

## What is V8?
