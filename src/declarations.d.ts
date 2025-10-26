declare module "*.png";
declare module "*.jpg";
declare module "*.jpeg";
declare module "*.svg";
declare module "*.gif";
declare module "figma:asset/*" {
    const content: string;
    export default content;
}
