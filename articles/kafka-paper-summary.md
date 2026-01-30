---
title: Kafka - A distributed messaging system for log processing
description: 'A summary of the paper'
slug: kafka-paper-summary
category: 'paper-summary'
date: '2025-06-03'
---

Paper Summary: Kreps, Jay, Neha Narkhede, and Jun Rao. “Kafka: A distributed messaging system for log processing.“, Proceedings of the NetDB 2011

The authors present Apache Kafka, a distributed messaging system developed to address the growing need for scalable, fault-tolerant log data messaging systems in large scale applications. Kafka is a system designed for high-throughput, low-latency log collection and delivery, a critical component in supporting both offline analytics and real-time data processing in modern data ecosystems. Traditional log processing systems do not scale with the increasing demands of internet companies. These companies rely on user activity data for search, recommendation, and advertising services. Prior approaches such as batch log shipping and general-purpose messaging systems (e.g., JMS, RabbitMQ) have performance bottlenecks, data duplication, and difficulty in handling both batch and real-time workloads.

The core idea of the authors is to treat all logs as a structured commit log. They abstract data streams as append-only sequences of events partitioned across topics. Their key innovations include:
1. High-throughput persistence: Kafka persists all messages to disk but uses the operating system’s page cache effectively for fast access. This approach allows it to decouple data producers from consumers, making asynchronous and parallel processing easier.
2. Pull-based consumption: Kafka allows consumers to pull messages at their own pace. This is unlike push-based messaging, which makes it well-suited for both batch and real-time systems.
3. Log compaction and retention policies: Kafka supports long-term storage with time-based or size-based retention, allowing data replay.
4. Horizontal scalability: Kafka partitions topics across multiple servers, and consumers form consumer groups that can process these partitions in parallel.

The authors test Kafka against ActiveMQ and RabbitMQ, showing that Kafka achieves order-of-magnitude higher throughput, with little performance deprecation with large amounts of data. They also discuss Kafka’s success in handling hundreds of gigabytes of data per day in production at LinkedIn.

While Kafka provides an efficient solution, the early version of Kafka in this paper does not provide strong delivery guarantees. This means users must handle message losses themselves. Kafka is widely used in cloud applications due to its scalability and fault tolerance. Many stream processing frameworks like Apache Flink and Apache Spark Streaming commonly use Kafka for data ingestion. Kafka is a robust, scalable solution that successfully bridges the gap between log aggregation and real-time stream processing. While some limitations exist around delivery and complexity, it has high throughput, fault tolerance, and simple architecture make it a powerful tool in distributed data infrastructure.
