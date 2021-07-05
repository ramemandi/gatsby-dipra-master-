import { graphql } from "gatsby";

export const NodeMenuFields = graphql`
  fragment NodeMenuFields on ContentfulMenu {
    title
    menuParent: contentfulparent {
      ... on ContentfulPage {
        pageTitle: title
        pageSlug: slug
        parentPath
      }
      ... on ContentfulResource {
        resourceTitle: title
        resourceSlug: slug
        parentPath
      }
    }
    links {
      ... on ContentfulLink {
        target
        title
        path
      }
      ... on ContentfulPage {
        pageTitle: title
        pageSlug: slug
        parentPath
      }
      ... on ContentfulResource {
        resourceTitle: title
        resourceSlug: slug
        parentPath
      }
      ... on ContentfulMenu {
        title
        menuParent: contentfulparent {
          ... on ContentfulPage {
            pageTitle: title
            pageSlug: slug
            parentPath
          }
          ... on ContentfulResource {
            resourceTitle: title
            resourceSlug: slug
            parentPath
          }
        }
        links {
          ... on ContentfulLink {
            target
            title
            path
          }
          ... on ContentfulPage {
            pageTitle: title
            pageSlug: slug
            parentPath
          }
          ... on ContentfulResource {
            resourceTitle: title
            resourceSlug: slug
            parentPath
          }
          ... on ContentfulMenu {
            title
            menuParent: contentfulparent {
              ... on ContentfulPage {
                pageTitle: title
                pageSlug: slug
                parentPath
              }
              ... on ContentfulResource {
                resourceTitle: title
                resourceSlug: slug
                parentPath
              }
            }
            links {
              ... on ContentfulLink {
                target
                title
                path
              }
              ... on ContentfulPage {
                pageTitle: title
                pageSlug: slug
                parentPath
              }
              ... on ContentfulResource {
                resourceTitle: title
                resourceSlug: slug
                parentPath
              }
              ... on ContentfulMenu {
                title
                menuParent: contentfulparent {
                  ... on ContentfulPage {
                    pageTitle: title
                    pageSlug: slug
                    parentPath
                  }
                  ... on ContentfulResource {
                    resourceTitle: title
                    resourceSlug: slug
                    parentPath
                  }
                }
                links {
                  ... on ContentfulLink {
                    target
                    title
                    path
                  }
                  ... on ContentfulPage {
                    pageTitle: title
                    pageSlug: slug
                    parentPath
                  }
                  ... on ContentfulResource {
                    resourceTitle: title
                    resourceSlug: slug
                    parentPath
                  }
                  ... on ContentfulMenu {
                    title
                    menuParent: contentfulparent {
                      ... on ContentfulPage {
                        pageTitle: title
                        pageSlug: slug
                        parentPath
                      }
                      ... on ContentfulResource {
                        resourceTitle: title
                        resourceSlug: slug
                        parentPath
                      }
                    }
                    links {
                      ... on ContentfulLink {
                        target
                        title
                        path
                      }
                      ... on ContentfulPage {
                        pageTitle: title
                        pageSlug: slug
                        parentPath
                      }
                      ... on ContentfulResource {
                        resourceTitle: title
                        resourceSlug: slug
                        parentPath
                      }
                      ... on ContentfulMenu {
                        title
                        menuParent: contentfulparent {
                          ... on ContentfulPage {
                            pageTitle: title
                            pageSlug: slug
                            parentPath
                          }
                          ... on ContentfulResource {
                            resourceTitle: title
                            resourceSlug: slug
                            parentPath
                          }
                        }
                        links {
                          ... on ContentfulLink {
                            target
                            title
                            path
                          }
                          ... on ContentfulPage {
                            pageTitle: title
                            pageSlug: slug
                            parentPath
                          }
                          ... on ContentfulResource {
                            resourceTitle: title
                            resourceSlug: slug
                            parentPath
                          }
                          ... on ContentfulMenu {
                            title
                            menuParent: contentfulparent {
                              ... on ContentfulPage {
                                pageTitle: title
                                pageSlug: slug
                                parentPath
                              }
                              ... on ContentfulResource {
                                resourceTitle: title
                                resourceSlug: slug
                                parentPath
                              }
                            }
                            links {
                              ... on ContentfulLink {
                                target
                                title
                                path
                              }
                              ... on ContentfulPage {
                                pageTitle: title
                                pageSlug: slug
                                parentPath
                              }
                              ... on ContentfulResource {
                                resourceTitle: title
                                resourceSlug: slug
                                parentPath
                              }
                              ... on ContentfulMenu {
                                title
                                menuParent: contentfulparent {
                                  ... on ContentfulPage {
                                    pageTitle: title
                                    pageSlug: slug
                                    parentPath
                                  }
                                  ... on ContentfulResource {
                                    resourceTitle: title
                                    resourceSlug: slug
                                    parentPath
                                  }
                                }
                                links {
                                  ... on ContentfulLink {
                                    target
                                    title
                                    path
                                  }
                                  ... on ContentfulPage {
                                    pageTitle: title
                                    pageSlug: slug
                                    parentPath
                                  }
                                  ... on ContentfulResource {
                                    resourceTitle: title
                                    resourceSlug: slug
                                    parentPath
                                  }
                                  ... on ContentfulMenu {
                                    title
                                    menuParent: contentfulparent {
                                      ... on ContentfulPage {
                                        pageTitle: title
                                        pageSlug: slug
                                        parentPath
                                      }
                                      ... on ContentfulResource {
                                        resourceTitle: title
                                        resourceSlug: slug
                                        parentPath
                                      }
                                    }
                                    links {
                                      ... on ContentfulLink {
                                        target
                                        title
                                        path
                                      }
                                      ... on ContentfulPage {
                                        pageTitle: title
                                        pageSlug: slug
                                        parentPath
                                      }
                                      ... on ContentfulResource {
                                        resourceTitle: title
                                        resourceSlug: slug
                                        parentPath
                                      }
                                      ... on ContentfulMenu {
                                        title
                                        menuParent: contentfulparent {
                                          ... on ContentfulPage {
                                            pageTitle: title
                                            pageSlug: slug
                                            parentPath
                                          }
                                          ... on ContentfulResource {
                                            resourceTitle: title
                                            resourceSlug: slug
                                            parentPath
                                          }
                                        }
                                        links {
                                          ... on ContentfulLink {
                                            target
                                            title
                                            path
                                          }
                                          ... on ContentfulPage {
                                            pageTitle: title
                                            pageSlug: slug
                                            parentPath
                                          }
                                          ... on ContentfulResource {
                                            resourceTitle: title
                                            resourceSlug: slug
                                            parentPath
                                          }
                                          ... on ContentfulMenu {
                                            title
                                            menuParent: contentfulparent {
                                              ... on ContentfulPage {
                                                pageTitle: title
                                                pageSlug: slug
                                                parentPath
                                              }
                                              ... on ContentfulResource {
                                                resourceTitle: title
                                                resourceSlug: slug
                                                parentPath
                                              }
                                            }
                                            links {
                                              ... on ContentfulLink {
                                                target
                                                title
                                                path
                                              }
                                              ... on ContentfulPage {
                                                pageTitle: title
                                                pageSlug: slug
                                                parentPath
                                              }
                                              ... on ContentfulResource {
                                                resourceTitle: title
                                                resourceSlug: slug
                                                parentPath
                                              }
                                              ... on ContentfulMenu {
                                                title
                                                menuParent: contentfulparent {
                                                  ... on ContentfulPage {
                                                    pageTitle: title
                                                    pageSlug: slug
                                                    parentPath
                                                  }
                                                  ... on ContentfulResource {
                                                    resourceTitle: title
                                                    resourceSlug: slug
                                                    parentPath
                                                  }
                                                }
                                                links {
                                                  ... on ContentfulLink {
                                                    target
                                                    title
                                                    path
                                                  }
                                                  ... on ContentfulPage {
                                                    pageTitle: title
                                                    pageSlug: slug
                                                    parentPath
                                                  }
                                                  ... on ContentfulResource {
                                                    resourceTitle: title
                                                    resourceSlug: slug
                                                    parentPath
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
