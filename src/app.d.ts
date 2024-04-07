declare global {
  interface postMetadata {
    url: string;
    title: string;
    description: string;
    publishDate: Date;
    tags: string[];
  }
  namespace App {
    // interface Error {}
    // interface Locals {}
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
