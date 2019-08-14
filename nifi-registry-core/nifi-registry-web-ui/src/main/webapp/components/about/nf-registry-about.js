/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import NfRegistryService from 'services/nf-registry.service';
import nfRegistryAnimations from 'nf-registry.animations';
import NfAboutDialogComponent from 'components/about/dialogs/nf-registry-about-dialog';

/**
 * NfLoginComponent constructor.
 *
 * @param nfRegistryService     The nf-registry.service module.
 * @param matDialog             The angular material dialog module.
 */
function NfAboutComponent(nfRegistryService, matDialog) {
    // Services
    this.nfRegistryService = nfRegistryService;
    this.dialog = matDialog;
}

NfAboutComponent.prototype = {
    constructor: NfAboutComponent,

    /**
     * Initialize the component
     */
    ngOnInit: function () {
        this.nfRegistryService.perspective = 'about';
        this.dialog.open(NfAboutDialogComponent, {
            disableClose: true
        });
    }
};

NfAboutComponent.annotations = [
    new Component({
        templateUrl: './nf-registry-about.html',
        animations: [nfRegistryAnimations.slideInLeftAnimation],
        host: {
            '[@routeAnimation]': 'routeAnimation'
        }
    })
];

NfAboutComponent.parameters = [
    NfRegistryService,
    MatDialog
];

export default NfAboutComponent;
