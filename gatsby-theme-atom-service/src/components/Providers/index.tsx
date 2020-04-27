import { graphql, useStaticQuery } from "gatsby";
import { sortBy } from "lodash";
import * as React from "react";
import { Grid } from "@material-ui/core";
import { JsonLd } from "react-schemaorg";
import { SoftwareApplication } from "schema-dts";
import { Card } from "../Card";

interface ProvidersQuery {
  providers: {
    edges: {
      node: {
        id: string;
        title: string;
        modal: string;
        types: {
          title: string;
          modal: string;
          packages: {
            title: string;
            url: string;
          }[];
        }[];
      };
    }[];
  };
}

const Providers = (): React.ReactElement => {
  const data = useStaticQuery<ProvidersQuery>(graphql`
    query ProvidersQuery {
      providers: allProvidersYaml {
        edges {
          node {
            id
            title
            modal
            types {
              title
              modal
              packages {
                title
                url
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      {data.providers.edges.map(({ node: scope }) => (
        <div key={scope.id} id={scope.modal}>
          <h2>{scope.title}</h2>
          <Grid container justify="space-evenly">
            {sortBy(scope.types, "title").map((type) => (
              <React.Fragment key={type.title}>
                {type.packages.map((package_) => (
                  <JsonLd<SoftwareApplication>
                    key={package_.url}
                    item={{
                      "@context": "https://schema.org",
                      "@type": "SoftwareApplication",
                      "@id": package_.url,
                      applicationCategory: "Development Tool",
                      applicationSubCategory: "Atom Package",
                      name: package_.title,
                      url: package_.url,
                      mainEntityOfPage: package_.url,
                      operatingSystem: "macOS, Windows, Linux",
                    }}
                  />
                ))}
                <Card
                  title={type.title}
                  links={type.packages.map((package_) => ({
                    name: package_.title,
                    url: package_.url,
                  }))}
                />
              </React.Fragment>
            ))}
          </Grid>
        </div>
      ))}
    </>
  );
};

export default Providers;
