---
title: Dynamo - amazon’s highly available key-value store
description: 'A summary of the paper'
slug: dynamo-paper-summary
category: 'paper-summary'
date: '2025-05-11'
---

Paper Summary: DeCandia, Giuseppe, et al. “Dynamo: amazon’s highly available key-value store.“, ACM SIGOPS 2007.

The authors present Dynamo and discuss its design, implementation, and real-world application. Dynamo is a distributed key-value storage system designed to meet Amazon’s strict requirements of high availability, scalability, and fault tolerance. Dynamo was developed to support Amazon’s e-commerce infrastructure, especially components like shopping carts and session states. It is tailor made for applications that demand it to have always-on write/read capabilities, even in the presence of hardware failures or network partitions.

To achieve this high availability while being partitioned, Dynamo compromises on consistency in accordance with the CAP conjecture. Specifically, it sacrifices strong consistency in favor of high availability and eventual consistency. It does so by achieving an “always writable” state by shifting conflict resolution to read operations rather than writes. This shift makes sure that services like the Amazon shopping cart can process user interactions even when replicas are inconsistent or offline.

The authors use the following techniques to make Dynamo a highly available database.
1. Consistent hashing for partitioning and replication: Dynamo partitions the keyspace using consistent hashing. Keys are assigned to nodes in a logical ring structure. Each node also owns multiple virtual nodes, improving load balancing and fault tolerance.
2. Sloppy quorum and hinted handoff: During node or network failures, Dynamo preserves availability by using a technique called “sloppy quorum,” where reads and writes are directed to the first N reachable nodes in the preference list rather than strictly fixed replicas. Temporary writes are stored with hints and are asynchronously transferred to their intended destination once it becomes available.
3. Versioning with vector clocks: To manage conflicting writes due to concurrent operations or network partitions, Dynamo implements vector clocks to monitor time. The data from these clocks allows Dynamo to return multiple conflicting versions to the client which may be conflicting with each other. The client will ultimately be responsible for reconciliation, with reconciliation logic itself being customizable per application. For example, shopping cart services merge different versions to preserve user intent.
4. Merkle trees for anti-entropy: Dynamo uses Merkle trees to efficiently detect and repair inconsistencies among replicas. This background anti-entropy process ensures eventual consistency without too much network or disk overhead.
5. Gossip-based membership and failure detection: Instead of centralized coordination for membership and failure detection, Dynamo uses a decentralized, peer-to-peer gossip protocol.

Dynamo also integrates tunable parameters such as the number of replicas (N), the number of replicas to read from (R), and the number of replicas to write to (W). This allows application developers to control tradeoffs between availability, consistency, and latency.

The authors also discuss Dynamo’s evolution through several partitioning strategies. Eventually, they adopted a model where the keyspace is divided into fixed-size partitions decoupled from physical node layout, allowing for consistent archiving and uniform load distribution even under highly asymmetric access patterns. By allowing eventual consistency and pushing conflict resolution to reads, Dynamo avoids write rejection and ensures high availability. Gossip protocols and consistent hashing ensure scalability and resilience with minimal human intervention. However, the flexibility of Dynamo means that the client must now handle version control logic. This approach also makes debugging and data correctness checks more difficult than in strictly consistent systems. Dynamo also assumes a safe environment, which may be reasonable for Amazon’s internal services. But such an assumption can be harmful in multi-tenant cloud platforms. In deployment, Dynamo served as the backend for multiple Amazon services with demanding performance requirements. It handled millions of write-heavy operations per day during peak periods, such as the holiday shopping season.