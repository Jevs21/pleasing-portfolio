
interface CountData {
  name: string;
  count: number;
}

interface UserAgentData {
  browsers: CountData[];
  os: CountData[];
  devices: CountData[];
  sources: CountData[];
}

interface SankeyNode {
  name: string;
}
interface SankeyLink {
  source: number;
  target: number;
  value: number;
}
interface SankeyData {
  nodes: SankeyNode[];
  links: SankeyLink[];
}

interface AnalyticsData {
  pageViews: number;
  uniqueVisits: number;
  avgSessionDuration: number;
  numInteractions: number;
  conversionRate: number;
  bounceCount: number;
  bounceRate: number;
  interactionData: CountData[];
  agentData: UserAgentData;
  sankeyData: SankeyData;
}


