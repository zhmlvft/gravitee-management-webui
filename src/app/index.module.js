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
import config from './index.config';
import routerConfig from './index.route';
import interceptorConfig from './index.interceptor';
import delegatorConfig from './index.delegator';
import runBlock from './index.run';

import FormDirective from './components/form/form.directive';
import AutofocusDirective from './components/autofocus/autofocus.directive';
import ApiService from './services/api.service';
import ApisController from './management/api/apis.controller';
import ApiPortalController from './management/api/portal/apiPortal.controller';
import ApiPortalPagesController from './management/api/portal/documentation/apiPages.controller';
import ApiPortalPageController from './management/api/portal/documentation/apiPage.controller';
import ApiPortalPlanController from './management/api/portal/plan/apiPlan.controller';
import ApiGeneralController from './management/api/admin/general/apiGeneral.controller';
import ApiAdminController from './management/api/admin/apiAdmin.controller';
import ApiAnalyticsController from './management/api/admin/analytics/analytics.controller';
import ApiMembersController from './management/api/admin/members/members.controller';
import ApiPoliciesController from './management/api/admin/policies/policies.controller';
import ApiEndpointController from './management/api/admin/endpoint/endpointConfiguration.controller';
import AddPoliciesPathController from './management/api/admin/policies/addPoliciesPath.controller';
import ApiHealthCheckController from './management/api/admin/healthcheck/healthcheck.controller';
import ApiResourcesController from './management/api/admin/resources/resources.controller';
import NewApiController from './management/api/admin/creation/newApi.controller';
import DialogAssertionInformationController from './management/api/admin/healthcheck/healthcheck-assertion-dialog.controller';
import DialogApiPermissionsHelpController from './management/api/admin/members/api-permissions-dialog.controller';
import DialogApplicationPermissionsHelpController from './management/application/details/members/application-permissions-dialog.controller';
import ApiPropertiesController from './management/api/admin/properties/properties.controller';
import SubscriptionsController from './management/api/admin/subscriptions/subscriptions.controller';
import ApiEventsController from './management/api/admin/events/apiEvents.controller';
import ApiHistoryController from './management/api/admin/history/apiHistory.controller';
import DialogAddPropertyController from './management/api/admin/properties/add-property.dialog.controller';
import DialogAddMemberApiController from './management/api/admin/members/addMemberDialog.controller';
import DialogTransferApiController from './management/api/admin/members/transferAPIDialog.controller';
import DialogApiKeyExpirationController from './management/api/admin/subscriptions/apikey.expiration.dialog.controller';
import DialogEditPolicyController from './management/api/admin/policies/dialog/policyDialog.controller';
import UserService from './services/user.service';
import UserController from './management/user/user.controller';
import NotificationService from './services/notification.service';
import DocumentationDirective from './management/api/admin/documentation/apiDocumentation.directive';
import DocumentationController from './management/api/admin/documentation/apiDocumentation.controller';
import DocumentationService from './services/apiDocumentation.service';
import ApplicationsController from './management/application/applications.controller';
import ApplicationController from './management/application/details/applications.controller';
import ApplicationGeneralController from './management/application/details/general/applicationGeneral.controller';
import ApplicationMembersController from './management/application/details/members/applicationMembers.controller';
import ApplicationSubscriptionsController from './management/application/details/subscriptions/applicationSubscriptions.controller';
import ApplicationAnalyticsController from './management/application/details/analytics/analytics.controller';
import DialogApplicationController from './management/application/dialog/applicationDialog.controller';
import DialogAddMemberController from './management/application/dialog/addMemberDialog.controller';
import ApplicationService from './services/applications.service';
import SideNavDirective from './components/sidenav/sidenav.directive';
import PageController from './management/api/admin/documentation/page/apiPage.controller';
import PolicyService from './services/policy.service';
import ResourceService from './services/resource.service';
import FetcherService from './services/fetcher.service';
import PageDirective from './components/documentation/page.directive';
import LoginController from './login/login.controller';
import RoleDirective from './components/role/role.directive';
import DiffDirective from './components/diff/diff.directive';
import DialogApiImportController from './management/api/admin/general/dialog/apiImportDialog.controller';
import DialogApiExportController from './management/api/admin/general/dialog/apiExportDialog.controller';
import InstancesService from './services/instances.service';
import InstancesController from './management/instances/instances.controller';
import InstanceController from './management/instances/details/instance.controller';
import InstanceEnvironmentController from './management/instances/details/environment/instanceEnvironment.controller';
import InstanceMonitoringController from './management/instances/details/monitoring/instanceMonitoring.controller';
import ImageDirective from './components/image/image.directive';
import EventsService from './services/events.service';
import AnalyticsService from './services/analytics.service';
import DashboardController from './management/platform/dashboard/dashboard.controller';
import PageSwaggerConfigurationService from './services/pageSwaggerConfiguration.service';
import PageSwaggerHttpClientService from './services/pageSwaggerHttpClient.service';
import DashboardModelDirective from './management/platform/dashboard/dashboardModel.directive';
import ViewsController from './management/configuration/admin/views/views.controller';
import ViewService from './services/view.service';
import DeleteViewDialogController from './management/configuration/admin/views/delete.view.dialog.controller';
import GroupsController from './management/configuration/admin/groups/groups.controller';
import GroupService from './services/group.service';
import DialogAddGroupController from './management/configuration/admin/groups/dialog/add-group.dialog.controller';
import DialogAddGroupMemberController from './management/configuration/admin/groups/dialog/addMemberDialog.controller';
import RegistrationController from './management/registration/registration.controller';
import ConfirmController from './management/registration/confirm/confirm.controller';
import DialogSubscribePlanController from './management/api/portal/plan/subscribePlanDialog.controller';
import SubscriptionService from './services/subscription.service';
import ApiPlansController from './management/api/admin/plans/apiPlans.controller';
import DialogSubscriptionRejectController from './management/api/admin/subscriptions/subscription.reject.dialog.controller';
import DialogSubscriptionAcceptController from './management/api/admin/subscriptions/subscription.accept.dialog.controller';
import DialogSubscriptionCreateController from './management/api/admin/subscriptions/subscription.create.dialog.controller';
import EmptyStateDirective from './components/emptystate/emptystate.directive';
import DialogClosePlanController from './management/api/admin/plans/closePlanDialog.controller';
import DialogPublishPlanController from './management/api/admin/plans/publishPlanDialog.controller';
import TagsController from './management/configuration/admin/tags/tags.controller';
import TagService from './services/tag.service';
import DeleteTagDialogController from './management/configuration/admin/tags/delete.tag.dialog.controller';
import ChartDirective from './components/chart/chart.directive';
import UserAvatarDirective from './components/avatar/user-avatar.directive';
import DialogConfirmController from './components/dialog/confirmDialog.controller';
import WidgetDirective from './components/widget/widget.directive';
import WidgetChartDirective from './components/widget/widget-chart.directive';
import WidgetChartTableDirective from './components/widget/widget-table.directive';
import WidgetChartLineDirective from './components/widget/widget-line.directive';
import WidgetChartPieDirective from './components/widget/widget-pie.directive';
import DashboardDirective from './components/analytics/dashboard.directive';
import TimeframeDirective from './components/analytics/timeframe.directive';
import AnalyticsFilterDirective from './components/analytics/filter.directive';
import DialogDynamicProviderHttpController from './management/api/admin/properties/dynamic-provider-http-dialog.controller';
import TenantsController from './management/configuration/admin/tenants/tenants.controller';
import TenantService from './services/tenant.service';
import DeleteTenantDialogController from './management/configuration/admin/tenants/delete.tenant.dialog.controller';

angular.module('gravitee', ['ui.router', 'ngMaterial', 'ramlConsoleApp', 'ng-showdown', 'swaggerUi',
  'ngMdIcons', 'ui.codemirror', 'md.data.table', 'ngCookies', 'dragularModule', 'readMore',
  'ngMessages', 'vAccordion', 'schemaForm', 'ngclipboard', 'ui.validate', 'gvConstants', 'angular-timeline',
  'ab-base64',  'ngFileUpload', 'md-steppers', 'ui.tree', 'angular-jwt', 'gridster'])
  .config(config)
  .config(routerConfig)
  .config(interceptorConfig)
  .config(delegatorConfig)
  .config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
      .primaryPalette('blue-grey')
      .accentPalette('blue');

    $mdThemingProvider.theme('sidenav')
      .backgroundPalette('grey', {
        'default': '50'
      });

    $mdThemingProvider.theme('toast-success');
    $mdThemingProvider.theme('toast-error');
  })
  .config(function ($showdownProvider) {
    $showdownProvider.setOption('tables', true);
    $showdownProvider.loadExtension('prettify');
  })
  .run(runBlock)
  .controller('ApisController', ApisController)
  .controller('ApiAdminController', ApiAdminController)
  .controller('ApiAnalyticsController', ApiAnalyticsController)
  .controller('ApiPoliciesController', ApiPoliciesController)
  .controller('AddPoliciesPathController', AddPoliciesPathController)
  .controller('ApiMembersController', ApiMembersController)
  .controller('ApiPortalController', ApiPortalController)
  .controller('ApiPortalPagesController', ApiPortalPagesController)
  .controller('ApiPortalPageController', ApiPortalPageController)
  .controller('ApiGeneralController', ApiGeneralController)
  .controller('ApiHealthCheckController', ApiHealthCheckController)
  .controller('ApiEndpointController', ApiEndpointController)
  .controller('DialogAssertionInformationController', DialogAssertionInformationController)
  .controller('DialogApiPermissionsHelpController', DialogApiPermissionsHelpController)
  .controller('DialogApplicationPermissionsHelpController', DialogApplicationPermissionsHelpController)
  .controller('ApiPropertiesController', ApiPropertiesController)
  .controller('SubscriptionsController', SubscriptionsController)
  .controller('ApiEventsController', ApiEventsController)
  .controller('ApiHistoryController', ApiHistoryController)
  .controller('ApiResourcesController', ApiResourcesController)
  .controller('NewApiController', NewApiController)
  .controller('DialogAddPropertyController', DialogAddPropertyController)
  .controller('DialogAddMemberApiController', DialogAddMemberApiController)
  .controller('DialogTransferApiController', DialogTransferApiController)
  .controller('DialogApiKeyExpirationController', DialogApiKeyExpirationController)
  .controller('UserController', UserController)
  .controller('DocumentationController', DocumentationController)
  .controller('ApplicationsController', ApplicationsController)
  .controller('ApplicationController', ApplicationController)
  .controller('ApplicationGeneralController', ApplicationGeneralController)
  .controller('ApplicationMembersController', ApplicationMembersController)
  .controller('ApplicationSubscriptionsController', ApplicationSubscriptionsController)
  .controller('ApplicationAnalyticsController', ApplicationAnalyticsController)
  .controller('DialogApplicationController', DialogApplicationController)
  .controller('DialogAddMemberController', DialogAddMemberController)
  .controller('DialogApiImportController', DialogApiImportController)
  .controller('DialogApiExportController', DialogApiExportController)
  .controller('DialogEditPolicyController', DialogEditPolicyController)
  .controller('PageController', PageController)
  .controller('LoginController', LoginController)
  .controller('InstancesController', InstancesController)
  .controller('InstanceController', InstanceController)
  .controller('InstanceEnvironmentController', InstanceEnvironmentController)
  .controller('InstanceMonitoringController', InstanceMonitoringController)
  .controller('DashboardController', DashboardController)
  .controller('ViewsController', ViewsController)
  .controller('TenantsController', TenantsController)
  .controller('DeleteViewDialogController', DeleteViewDialogController)
  .controller('DeleteTenantDialogController', DeleteTenantDialogController)
  .controller('GroupsController', GroupsController)
  .controller('DialogAddGroupController', DialogAddGroupController)
  .controller('DialogAddGroupMemberController', DialogAddGroupMemberController)
  .controller('RegistrationController', RegistrationController)
  .controller('ConfirmController', ConfirmController)
  .controller('ApiPortalPlanController', ApiPortalPlanController)
  .controller('DialogSubscribePlanController', DialogSubscribePlanController)
  .controller('ApiPlansController', ApiPlansController)
  .controller('DialogSubscriptionRejectController', DialogSubscriptionRejectController)
  .controller('DialogSubscriptionAcceptController', DialogSubscriptionAcceptController)
  .controller('DialogSubscriptionCreateController', DialogSubscriptionCreateController)
  .controller('DialogClosePlanController', DialogClosePlanController)
  .controller('DialogPublishPlanController', DialogPublishPlanController)
  .controller('TagsController', TagsController)
  .controller('DeleteTagDialogController', DeleteTagDialogController)
  .controller('DialogConfirmController', DialogConfirmController)
  .controller('DialogDynamicProviderHttpController', DialogDynamicProviderHttpController)
  .service('ApplicationService', ApplicationService)
  .service('ApiService', ApiService)
  .service('DocumentationService', DocumentationService)
  .service('InstancesService', InstancesService)
  .service('NotificationService', NotificationService)
  .service('PolicyService', PolicyService)
  .service('UserService', UserService)
  .service('ResourceService', ResourceService)
  .service('FetcherService', FetcherService)
  .service('EventsService', EventsService)
  .service('AnalyticsService', AnalyticsService)
  .service('PageSwaggerConfigurationService', PageSwaggerConfigurationService)
  .service('PageSwaggerHttpClientService', PageSwaggerHttpClientService)
  .service('ViewService', ViewService)
  .service('GroupService', GroupService)
  .service('SubscriptionService', SubscriptionService)
  .service('TagService', TagService)
  .service('TenantService', TenantService)
  .directive('filecontent', () => new DocumentationDirective())
  .directive('graviteeSidenav', () => new SideNavDirective())
  .directive('graviteePage', () => new PageDirective())
  .directive('noDirtyCheck', () => new FormDirective())
  .directive('autofocus', () => new AutofocusDirective())
  .directive('graviteeRolesAllowed', () => new RoleDirective())
  .directive('graviteeDiff', () => new DiffDirective())
  .directive('graviteeImage', () => new ImageDirective())
  .directive('graviteeDashboardModel', () => new DashboardModelDirective())
  .directive('graviteeEmptyState', () => new EmptyStateDirective())
  .directive('graviteeChart', () => new ChartDirective())
  .directive('graviteeUserAvatar', () => new UserAvatarDirective())
  .directive('graviteeWidget', () => new WidgetDirective())
  .directive('graviteeWidgetChart', () => new WidgetChartDirective())
  .directive('graviteeChartTable', () => new WidgetChartTableDirective())
  .directive('graviteeChartPie', () => new WidgetChartPieDirective())
  .directive('graviteeChartLine', () => new WidgetChartLineDirective())
  .directive('graviteeDashboard', () => new DashboardDirective())
  .directive('graviteeTimeframe', () => new TimeframeDirective())
  .directive('graviteeAnalyticsFilter', () => new AnalyticsFilterDirective())
  .filter('humanDateFilter', function () {
    return function(input) {
      if (!moment().subtract(1, 'weeks').isAfter(input)) {
        return moment(input).fromNow();
      } else {
        return moment(input).format('D MMM. YYYY');
      }
    };
  })
  .filter('humanDatetimeFilter', function () {
    return function(input) {
      if (!moment().subtract(1, 'weeks').isAfter(input)) {
        return moment(input).fromNow();
      } else {
        return moment(input).format('D MMM. YYYY HH:mm:ss');
      }
    };
  })
  .filter('apiKeyFilter', function () {
    return function (keys) {
      return keys;
    };
  });
