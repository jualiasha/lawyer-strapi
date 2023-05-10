'use strict';

/**
 * juriki service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::juriki.juriki');
