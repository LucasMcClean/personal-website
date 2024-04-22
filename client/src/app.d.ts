declare global {
  interface PostMetadata {
    title: string;
    description: string;
    publishDate: Date;
    tags: string;
  }
  interface Post {
    title: string;
    publishDate: Date;
    tags: string;
    content;
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
