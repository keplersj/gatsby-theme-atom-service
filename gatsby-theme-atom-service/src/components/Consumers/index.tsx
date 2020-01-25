import { graphql, useStaticQuery } from "gatsby";
import { sortBy } from "lodash";
import * as React from "react";
import { Grid } from "@material-ui/core";
import { JsonLd } from "react-schemaorg";
import { SoftwareApplication, SoftwareSourceCode } from "schema-dts";
import { Card } from "../Card";

interface ConsumersQuery {
  consumers: {
    edges: {
      node: {
        id: string;
        author: string;
        title: string;
        url: string;
        code: string;
      };
    }[];
  };
}

const Consumers = (): React.ReactElement => {
  const data = useStaticQuery<ConsumersQuery>(graphql`
    query ConsumersQuery {
      consumers: allConsumersYaml {
        edges {
          node {
            id
            author
            title
            url
            code
          }
        }
      }
    }
  `);

  return (
    <div id="consumers">
      <h2>Consumers</h2>
      <Grid container justify="space-evenly">
        {sortBy(data.consumers.edges, "node.title").map(({ node }) => {
          return (
            <React.Fragment key={node.id}>
              <JsonLd<SoftwareApplication>
                item={{
                  "@context": "https://schema.org",
                  "@type": "SoftwareApplication",
                  "@id": node.url,
                  name: node.title,
                  applicationCategory: "Development Tool",
                  applicationSubCategory: "Atom Package",
                  url: node.url,
                  mainEntityOfPage: node.url,
                  operatingSystem: "macOS, Windows, Linux"
                }}
              />
              <JsonLd<SoftwareSourceCode>
                item={{
                  "@context": "https://schema.org",
                  "@type": "SoftwareSourceCode",
                  "@id": node.code,
                  targetProduct: {
                    "@type": "SoftwareApplication",
                    "@id": node.url
                  },
                  codeRepository: node.code,
                  url: node.code,
                  mainEntityOfPage: node.code
                }}
              />
              <Card
                title={node.title}
                subtitle={`Maintained by ${node.author}`}
                links={[
                  { name: "Atom Package Manager", url: node.url },
                  { name: "Source Code on GitHub", url: node.code }
                ]}
              />
            </React.Fragment>
          );
        })}
      </Grid>
    </div>
  );
};

export default Consumers;
