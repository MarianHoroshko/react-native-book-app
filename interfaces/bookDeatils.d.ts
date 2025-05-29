interface BookDetails {
  publishers: string[];
  number_of_pages: number;
  subtitle: string;
  description: {
    type: string;
    value: string;
  };
  covers: number[];
  title: string;
  publish_date: number;
  copyright_date: number;
}
