---
title: Apache flink - Stream and batch processing in a single engine
description: 'A summary of the paper'
slug: flink-paper-summary
category: 'paper-summary'
date: '2025-06-02'
---

Paper Summary: Carbone, Paris, et al. “Apache flink: Stream and batch processing in a single engine”, Bulletin of the IEEE Computer Society Technical Committee on Data Engineering 2015.

The authors introduce Apache Flink, an open-source data processing system for performing stream and batch processing under a single execution engine. Unlike traditional systems, Flink is built on the idea that all data processing is essentially stream processing, with batch being just a bounded special case. With most modern data originating as continuous streams (e.g., web/app logs, sensor feeds), stream-first semantics offer a more efficient and flexible computational model.

Flink’s main feature lies in its streaming dataflow architecture that powers both batch and stream workloads. The system is structured around a directed acyclic graph (DAG) of stateful operators connected via logical data streams. This model supports fine-grained operations like filtering, aggregation, joins, and windowing. Flink programs are executed in a distributed runtime that supports parallelization, fault tolerance, and low-latency processing.

Flink offers two primary APIs:
- DataStream API for unbounded data streams,
- DataSet API for bounded, batch-style data sets.

These APIs compile to a common intermediate representation — a dataflow graph allowing seamless optimization and execution. Key features that distinguish Flink include:
1. Flexible Windowing and Time Semantics: Flink supports event-time, ingestion-time, and processing-time semantics, enabling timely window-based computations on out-of-order data.
2. Exactly-once State Consistency: Through asynchronous barrier snapshotting (ABS), Flink achieves exactly-once semantics without pausing computation, using distributed snapshots like Chandy Lamport to persist operator state at checkpoints.
3. Asynchronous and Iterative Processing: Flink supports iterations (e.g., for graph and ML workloads) via feedback loops in the dataflow graph, with support for both synchronous and asynchronous models.
4. Modular and Extensible Stack: Flink includes libraries like FlinkML for machine learning, Gelly for graph processing, and a SQL-like Table API, fostering wide applicability.

Flink operates in a distributed setup with three key components: the Client, JobManager, and TaskManagers. The JobManager handles coordination, scheduling, and checkpointing, while TaskManagers execute the operators. Flink optimizes communication using pipelined or blocking intermediate data streams, balancing throughput and latency. It also uses backpressure propagation to handle slow consumers efficiently.

Flink’s ability to handle exactly-once semantics, stateful operations, and out-of-order processing gives it an edge over systems like Spark Streaming (which uses micro-batching) or Apache Storm (which lacks robust state management). However, correct configuration of checkpointing, memory management, and watermarks can be challenging for production systems. Moreover, while Flink offers strong consistency guarantees, these can come with overheads in checkpointing and state management. Despite this, Flink is a leading choice for low-latency, large-scale, and fault-tolerant stream processing with additional support for batch processing.
