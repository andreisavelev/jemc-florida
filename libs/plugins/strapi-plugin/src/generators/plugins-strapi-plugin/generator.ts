import { normalize } from '@angular-devkit/core';
import {
  addProjectConfiguration,
  formatFiles,
  getWorkspaceLayout,
  names,
  Tree,
} from '@nrwl/devkit';
import { generateNewApp as generateStrapi } from '@strapi/generate-new'
import { NxStrapiPluginGeneratorSchema } from './schema';

interface NormalizedSchema extends NxStrapiPluginGeneratorSchema {
  projectName: string;
  projectRoot: string;
  projectDirectory: string;
  parsedTags: string[];
}

function normalizeOptions(
  host: Tree,
  options: NxStrapiPluginGeneratorSchema
): NormalizedSchema {
  const name = names(options.name).fileName;
  const projectDirectory = options.directory
    ? `${names(options.directory).fileName}/${name}`
    : name;
  const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
  const projectRoot = normalize(
    `${getWorkspaceLayout(host).appsDir}/${projectDirectory}`
  );
  const parsedTags = options.tags
    ? options.tags.split(',').map((s) => s.trim())
    : [];

  return {
    ...options,
    projectName,
    projectRoot,
    projectDirectory,
    parsedTags,
  };
}

export default async function (
  host: Tree,
  options: NxStrapiPluginGeneratorSchema
): Promise<void> {
  const normalizedOptions = normalizeOptions(host, options);

  addProjectConfiguration(host, normalizedOptions.projectName, {
    root: normalizedOptions.projectRoot,
    projectType: 'application',
    sourceRoot: `${normalizedOptions.projectRoot}/src`,
    targets: {
      build: {
        executor: '@jemc/strapi-plugin:build',
      },
      serve: {
        executor: '@jemc/strapi-plugin:develop',
      },
    },
    tags: normalizedOptions.parsedTags,
  });

  await generateStrapi(normalizedOptions.projectRoot, {
    quickstart: true,
    run: false,
  });

  await formatFiles(host);
}
