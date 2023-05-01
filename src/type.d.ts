type ViewsDataType = {
	[key: string]: number;
};

type GraphDataType = {
	views: ViewsDataType;
};

type TopLocationDataType = {
	country: string;
	count: number;
	percent: number;
};

type TopSourceDataType = {
	source: string;
	count: number;
	percent: number;
};

type ApiDataType = {
	graph_data: GraphDataType;
	top_locations: TopLocationDataType[];
	top_sources: TopSourceDataType[];
};

type AppContextState = {
	headerTitle: string;
	setHeaderTitle: (headerTitle: string) => void;
};
