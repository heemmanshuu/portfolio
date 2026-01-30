---
title: Spanner - Google’s globally distributed database
description: 'A summary of the paper'
slug: spanner-paper-summary
category: 'paper-summary'
date: '2025-05-11'
---

Paper Summary: Corbett, James C., et al. “Spanner: Google’s globally distributed database.“, ACM Transactions on Computer Systems (TOCS) 31.3 (2013): 1-22.

The authors discuss the design and implementation of Spanner: Google’s globally distributed, synchronously replicated database that supports externally consistent transactions at scale. Spanner combines the scalability and availability of NoSQL systems with the strong consistency guarantees and structured data model of traditional relational databases. The authors show that it is possible to provide external consistency across data centers at global scale without sacrificing availability or scalability. Spanner shards data across multiple datacenters using Paxos-based replication groups to maintain availability and fault tolerance. Each replica group called a Paxos group manages a subset of the overall database. Clients communicate with these Paxos groups’ leaders to read and write data, ensuring consistency and coordination.

Spanner also innovatively uses the TrueTime API, a system that exposes clock uncertainty unlike scalar or vector clocks. TrueTime uses a combination of GPS and atomic clocks to provide time as an interval rather than a single value. Spanner uses this to assign globally consistent timestamps to transactions, which are essential for maintaining external consistency. After assigning a timestamp, Spanner waits for the uncertainty window to pass, ensuring that the assigned time has passed in the real world. This helps preserve the correct serialization order.

To support diverse workloads, Spanner provides:
1. Multi-version concurrency control (MVCC) with automatic garbage collection of old versions.
2. Read-write transactions using two-phase locking and commit.
3. Lock-free read-only transactions that are guaranteed to see a consistent view of the database at a specific timestamp.
4. Non-blocking snapshot reads, which allow users to query past versions of data without interfering with current transactions.
5. Atomic schema changes, using TrueTime timestamps and fine-grained concurrency control.

Spanner uses a semi-relational data model. It supports structured tables, interleaved hierarchies, and a SQL-based query language. Tables are defined with primary keys and optional interleaved relationships to specify location and performance constraints. Spanner also supports directories. Directories are groups of related rows based on shared key prefixes. These are used to control data placement and optimize access patterns. The system automatically manages data rebalancing and replication across zones. It tracks the load, latency, and fault domains, and dynamically moves directories across Paxos groups to maintain performance and high availability.

Spanner achieves read latencies around 1.3 - 1.4 ms and write latencies of about 14 ms across three or five replicas. Write throughput degrades with more replicas due to increased coordination. However, read scalability improves due to wider replica selection. The authors also share a case study of F1 (Google’s advertising backend), which was migrated from a heavily sharded MySQL setup to Spanner. The migration is shown to improve reliability. I also eliminated the need for manual sharding, and enabled consistency in transactions and strong availability. Spanner’s ability to automatically rebalance and place data according to load and application proximity helped F1 achieve better performance.

Spanner showed that globally consistent transactions are achievable without crippling performance, provided that bounded clock synchronization is available. However, the system depends heavily on highly reliable and accurate clock infrastructure (GPS, atomic clocks). Without the scale and resources such as Google which can ensure precision, it may be difficult to use Spanner in the wild. The use of TrueTime also adds latency costs due to commit wait times, particularly in low-latency environments or smaller clusters. 
