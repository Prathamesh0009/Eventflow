# EventFlow

**A cloud-native, event-driven platform for ingesting, processing, and storing application-level usage events.**

EventFlow is designed as an engineering-first platform that demonstrates how modern software systems should be structured when long-term scalability, maintainability, and data-readiness are treated as first-class concerns. The system focuses on building the **core infrastructure** required to support analytics and ML use cases, rather than being a finished analytics product.

---

## 🎯 Project Overview

EventFlow addresses the common problem of event collection and management in modern applications. Many teams face difficulties with:

- Tight coupling between product logic and analytics logic
- Lack of standardization in event definitions
- Poor scalability when event volume increases
- Limited visibility into collected events
- Difficult migration to analytics platforms later

EventFlow solves this by providing:
- ✅ Clean and scalable event ingestion API
- ✅ Centralized event storage with strong structure
- ✅ Visibility into collected events
- ✅ Extensibility for future analytics and ML use cases

---

## 🏗️ Architecture

EventFlow follows an **event-first architecture** with clear separation of concerns:

```
Frontend (Next.js) → Backend API (NestJS) → Event Store (PostgreSQL)
                                              ↓
                                    Consumer Groups → Event Processing
```

### Key Components

- **Frontend Dashboard** - Next.js web application for managing streams, viewing events, and monitoring consumers
- **Backend API** - NestJS REST API for event ingestion, querying, and management
- **Event Store** - PostgreSQL database with append-only event storage
- **Consumer System** - Consumer groups with offset tracking for reliable event consumption
- **Processing Pipeline** - Async event processing with retry logic and dead letter queue

---

## 🛠️ Technology Stack

### Frontend
- **Next.js 14+** (App Router) with TypeScript
- **React 18+** with Tailwind CSS
- **Zustand** for global state management
- **React Query** for server state
- **React Hook Form + Zod** for form validation

### Backend
- **Node.js** with **NestJS** framework
- **PostgreSQL** for event storage
- **Redis** for caching and rate limiting
- **Prisma** for database access and migrations
- **JWT** for authentication
- **OpenTelemetry** for observability

### Infrastructure
- **AWS** (EC2/ECS, RDS, CloudWatch)
- **Docker** for containerization
- **Terraform** for Infrastructure as Code
- **GitHub Actions** for CI/CD

---

## 📚 Documentation

This project includes comprehensive documentation covering the entire design and planning process:

### Phase 0: Overview
- [Problem Statement](docs/00_overview/01_problem_statement.md) - Why EventFlow exists
- [Why EventFlow](docs/00_overview/02_why_eventflow.md) - Design motivation
- [Target Users](docs/00_overview/03_target_users.md) - Who this is for
- [Production-Ready Implementation Plan](docs/00_overview/PRODUCTION_READY_IMPLEMENTATION_PLAN.md) - Step-by-step implementation guide

### Phase 1: Requirements
- [Functional Requirements](docs/01_requirements/1.1_functional_requirements.md) - What the system must do
- [Non-Functional Requirements](docs/01_requirements/1.2_non-functional_requirements.md) - Quality attributes
- [Constraints & Assumptions](docs/01_requirements/1.3_constraints_&_assumtions.md) - Project boundaries

### Phase 2: Architecture
- [High-Level Architecture](docs/02_architecture/2.1_high_level_architecture.md) - System components
- [Technical Stack Mapping](docs/02_architecture/2.2_technical_stack_mapping.md) - Technology choices
- [Data & Event Model Design](docs/02_architecture/2.3_data_and_event_model_design.md) - Data structure
- [API Design](docs/02_architecture/2.4_api_design(contracts-only).md) - API contracts
- [Cloud Architecture & Deployment](docs/02_architecture/2.5_cloud_architecture_&_deployment_design.md) - AWS deployment
- [Security Design](docs/02_architecture/2.6_security_design.md) - Security measures

### Phase 3: Execution & Build Strategy
- [Backend Execution Design](docs/03_execution_&_build_strategy/3.1_backend_execution_design.md) - Backend implementation plan
- [Backend Detailed Module Design](docs/03_execution_&_build_strategy/3.2_backend_detailed_module_design.md) - Module breakdown
- [Database Schema Design](docs/03_execution_&_build_strategy/3.3_database_schema.md) - Complete database schema
- [Backend Request & Event Flow](docs/03_execution_&_build_strategy/3.4_backend_request_&_event_flow_execution.md) - Runtime behavior
- [Frontend-Backend Interaction](docs/03_execution_&_build_strategy/3.5_frontend-backend_interaction_design.md) - Integration design
- [Frontend Detailed Module Design](docs/03_execution_&_build_strategy/3.6_frontend_detailed_module_design.md) - Frontend architecture
- [Testing Strategy](docs/03_execution_&_build_strategy/3.7_testing_strategy.md) - Testing approach
- [CI/CD Pipeline Design](docs/03_execution_&_build_strategy/3.8_cicd_pipeline_design.md) - Deployment automation
- [Monitoring & Alerting Design](docs/03_execution_&_build_strategy/3.9_monitoring_&_alerting_design.md) - Observability strategy

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL 15+
- Redis 7+
- Docker (optional, for containerized deployment)
- AWS Account (for cloud deployment)

### Environment Variables

Copy `backend/.env.example` to `backend/.env` and `frontend/.env.example` to `frontend/.env.local`, then set your values.

---

## 🎯 Key Features

### MVP Features
- ✅ Event ingestion via REST API
- ✅ Event stream management
- ✅ Consumer groups with offset tracking
- ✅ Dead letter queue for failed events
- ✅ Web dashboard for event visualization
- ✅ API key authentication
- ✅ Role-based access control
- ✅ Rate limiting
- ✅ Structured logging and metrics

### Future Enhancements
- Real-time analytics dashboards
- Stream processing (Kafka integration)
- Machine learning pipelines
- Advanced query capabilities
- Multi-region replication

---

## 🔒 Security

EventFlow implements comprehensive security measures:

- **Authentication**: JWT tokens for users, API keys for producers
- **Authorization**: Role-based access control (RBAC)
- **Encryption**: Data encrypted at rest and in transit
- **Input Validation**: Schema validation for all events
- **Rate Limiting**: Per-API-key rate limits
- **Audit Logging**: All security events logged

See [Security Design](docs/02_architecture/2.6_security_design.md) for details.

---

## 🧪 Testing

The project follows a comprehensive testing strategy:

- **Unit Tests**: 80%+ coverage target
- **Integration Tests**: All API endpoints tested
- **E2E Tests**: Critical user journeys
- **Performance Tests**: Load testing for event ingestion
- **Security Tests**: Authentication and authorization testing

See [Testing Strategy](docs/03_execution_&_build_strategy/3.7_testing_strategy.md) for details.

---

## 📊 Monitoring & Observability

EventFlow includes comprehensive observability:

- **Metrics**: Business and technical metrics via CloudWatch
- **Logging**: Structured JSON logs with request tracing
- **Tracing**: Distributed tracing with OpenTelemetry/X-Ray
- **Alerting**: Multi-level alerts (Critical, High, Medium, Low)
- **Dashboards**: Custom CloudWatch dashboards

See [Monitoring & Alerting Design](docs/03_execution_&_build_strategy/3.9_monitoring_&_alerting_design.md) for details.

---

## 🤝 Contributing

This is a personal project demonstrating production-ready system design. The documentation shows the complete thought process and architectural decisions.

---

## 🙏 Acknowledgments

This project demonstrates modern software engineering practices including:
- Event-driven architecture
- Cloud-native design
- Production-ready planning
- Comprehensive documentation

---

## 📞 Contact

prathamesh.patil000009@gmail.com

---

**Built with careful planning and attention to production-ready architecture.** 🚀