const projects = [
  {
    id: "book-app",
    title: "Book sharing & borrowing app",
    kind: "personal",
    status: "In progress",
    blurb:
      "A mobile app for lending and borrowing books within a community — listing what you own, requesting a borrow, and tracking what's out on loan.",
    points: [
      "Architect and build a location-based peer-to-peer book-borrowing platform, enabling users to discover nearby physical books, create listings, submit borrowing requests, and manage the full request → approval → borrowing → return lifecycle.",
      "Design a feature-based Flutter architecture using Riverpod, repository/data-source separation, domain models, and dependency injection, decoupling UI, business logic, networking, and persistence for testability and maintainability.",
      "Implement location-aware book discovery with distance-based results while minimizing exposure of users' precise location data; handled location permissions, unavailable location services, and degraded-network scenarios.",
      "Build resilient data flows with local caching, explicit loading/empty/error states, retry handling, and network failure recovery, allowing core user data to remain usable under unreliable connectivity.",
      "Develop automated unit, widget, provider, and end-to-end integration tests covering critical flows including book discovery, listing creation, borrowing requests, approval, and book returns.",
      "Establish GitHub Actions CI/CD for formatting, static analysis, automated testing, and production builds implemented environment configuration, secure secret handling, release QA, crash monitoring, and product analytics.",
      "Profile and optimize application performance across network requests, image-heavy book listings, widget rebuilds and scrolling; documented architectural trade-offs, testing strategy, and production release decisions.",
    ],
    tags: ["Flutter", "Dart", "Supabase", "REST"],
    links: [], // TODO: add GitHub / demo links when ready
  },

];

export default projects;
