const projects = [
  {
    id: "book-app",
    title: "Book sharing & borrowing app",
    kind: "personal",
    status: "In progress",
    blurb:
      "A mobile app for lending and borrowing books within a community — listing what you own, requesting a borrow, and tracking what's out on loan.",
    points: [
      "Flutter client with a Go backend and a REST API.",
      "Building it end-to-end, from the data model and API to the UI.",
    ],
    tags: ["Flutter", "Dart", "Go", "REST"],
    links: [], // TODO: add GitHub / demo links when ready
  },
  {
    id: "booking-forms",
    title: "Dynamic booking forms",
    kind: "work",
    status: null,
    blurb:
      "Activity suppliers define their booking questions at runtime, and conditional fields cascade. A wrong answer gets the booking rejected after payment.",
    points: [
      "Put schema resolution in pure functions — no widgets, no BuildContext — so it's testable on its own.",
      "Built the trigger-to-reveal index once at load instead of searching per question.",
      "Chose a static map over a generic rule engine: it fails at compile time, not at payment.",
    ],
    tags: ["Flutter", "Dart", "Third-party API"],
    links: [],
  },
  {
    id: "flight-booking",
    title: "Flight booking state",
    kind: "work",
    status: null,
    blurb:
      "Ten screens where every step depends on server-issued IDs from the step before, and the user can back out at any point.",
    points: [
      "One bloc owns the whole transaction, so any screen can be entered with just its route args.",
      "Modelled selections as Equatable value objects instead of loose maps.",
      "Rejected per-screen blocs — they'd need prop-drilling or a re-fetch that risks re-pricing mid-booking.",
    ],
    tags: ["flutter_bloc", "State design"],
    links: [],
  },
  {
    id: "async-job",
    title: "Async job lifecycle",
    kind: "work",
    status: null,
    blurb:
      "Transit visa checks run as a start-job / poll-for-result API rather than a normal request/response.",
    points: [
      "Used four state fields instead of one isLoading — each maps to a different recovery path.",
      "A boolean can't tell 'never started' from 'lost the reference' from 'finished, no result'.",
    ],
    tags: ["Async", "State design"],
    links: [],
  },
  {
    id: "insurance",
    title: "Travel insurance checkout",
    kind: "work",
    status: null,
    blurb:
      "Insurance sells during flight booking but comes from a different provider with its own order and payment.",
    points: [
      "Kept it as a second, independent order so a failed insurance payment can't void a confirmed flight.",
      "Fetched the form's dropdown options from the provider instead of hardcoding them.",
    ],
    tags: ["Payments", "Failure design"],
    links: [],
  },
  {
    id: "points",
    title: "Loyalty points redemption",
    kind: "work",
    status: null,
    blurb: "Points redeem across five checkouts owned by different blocs and different engineers.",
    points: [
      "One small bloc plus a droppable widget — payment blocs only ever learn the discounted total.",
      "Avoided a shared base payment screen that would couple five independent checkouts.",
    ],
    tags: ["Composition", "flutter_bloc"],
    links: [],
  },
  {
    id: "itinerary-v2",
    title: "Multi-country trip planner",
    kind: "work",
    status: null,
    blurb: "The planner had to go multi-country while the new API contract was still changing.",
    points: ["Shipped a parallel v2 alongside v1, so rollback was just not routing to it."],
    tags: ["Migration", "Flutter"],
    links: [],
  },
];

export default projects;
