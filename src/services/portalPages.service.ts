/*
 * Copyright (C) 2015 The Gravitee team (http://gravitee.io)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import * as _ from 'lodash';

class PortalPagesService {
  private swaggerConfigurationCache: any;
  private pagesURL: () => string;

  constructor(private $http, private $q, Constants) {
    'ngInject';
    this.swaggerConfigurationCache = {};
    this.pagesURL = () => `${Constants.baseURL}portal/pages/`;
  }

  list() {
    return this.$http.get(this.pagesURL());
  }

  get(pageId?: string) {
    if (pageId) {
      return this.$http.get(this.pagesURL() + pageId);
    } else {
      return this.$q.resolve({});
    }
  }

  getHomepage() {
    let deferred = this.$q.defer();
    let that = this;
    this.$http
      .get(this.pagesURL(), {params:{"homepage": true}})
      .then(function(response) {
        if (response.data.length > 0) {
          that
            .get(response.data[0].id)
            .then(response => deferred.resolve(response));
        } else {
          deferred.resolve({});
        }
      })
      .catch( msg => deferred.reject(msg) );

    return deferred.promise;
  }

  listPortalDocumentation() {
    return this.$http
      .get(this.pagesURL(), {params:{"homepage": false}});
  }

  getContentUrl(pageId) {
    return this.pagesURL() + pageId + '/content';
  }

  createPage(newPage) {
    return this.$http.post(this.pagesURL(), newPage);
  }

  deletePage(pageId) {
    return this.$http.delete(this.pagesURL() + pageId);
  }

  editPage(pageId, editPage) {
    return this.$http.put(this.pagesURL() + pageId,
      {
        name: editPage.name,
        description: editPage.description,
        order: editPage.order,
        published: editPage.published,
        content: editPage.content || '',
        source: editPage.source,
        homepage: editPage.homepage,
        configuration: editPage.configuration
      }
    );
  }

  cachePageConfiguration(page) {
    if (!_.isNil(page) && page.type === 'SWAGGER' && !_.isNil(page.configuration)) {
      let contentUrl = this.getContentUrl(page.id);
      let url;

      try {
        url = new URL(contentUrl);
      } catch (error) {
        url = new URL(location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '') + this.getContentUrl(page.id));
      }

      this.swaggerConfigurationCache[url.pathname] = page.configuration;
    }
  }

  getPageConfigurationFromCache(pageContentUrl) {
    return this.swaggerConfigurationCache[pageContentUrl];
  }
}

export default PortalPagesService;
