<template>
  <div class="users-show">
    <!-- Breadcrumb -->
    <section class="g-my-30">
      <div class="container">
        <ul class="u-list-inline">
          <li class="list-inline-item g-color-primary">
            <span>User Profile</span>
          </li>
        </ul>
      </div>
    </section>
    <!-- End Breadcrumb -->

    <section class="g-mb-100">
      <div class="container">
        <div class="row">
          <!-- Profile Sidebar -->
          <div class="col-lg-3 g-mb-50 g-mb-0--lg">
            <!-- User Image -->
            <div class="u-block-hover g-pos-rel">
              <figure>
                <img
                  class="img-fluid w-100 u-block-hover__main--zoom-v1"
                  v-bind:src="user.image_url"
                  alt="Image Description"
                />
              </figure>

              <!-- Figure Caption -->
              <figcaption
                class="u-block-hover__additional--fade g-bg-black-opacity-0_5 g-pa-30"
              >
                <div
                  class="u-block-hover__additional--fade u-block-hover__additional--fade-up g-flex-middle"
                >
                  <!-- Figure Social Icons -->
                  <ul
                    class="list-inline text-center g-flex-middle-item--bottom g-mb-20"
                  >
                    <li class="list-inline-item align-middle g-mx-7">
                      <a
                        class="u-icon-v1 u-icon-size--md g-color-white"
                        :href="`/users/${user.id}/edit`"
                      >
                        <i class="icon-note u-line-icon-pro"></i>
                      </a>
                    </li>
                  </ul>
                  <!-- End Figure Social Icons -->
                </div>
              </figcaption>
              <!-- End Figure Caption -->

              <!-- User Info -->
              <span class="g-pos-abs g-top-20 g-left-0">
                <a class="btn btn-sm u-btn-primary rounded-0" href="#">{{
                  user.name
                }}</a>
              </span>
              <!-- End User Info -->
            </div>
            <!-- User Image -->

            <!-- Sidebar Navigation -->
            <div class="list-group list-group-border-0 g-mb-40">
              <!-- Settings -->
              <a
                href="/posts"
                class="list-group-item list-group-item-action justify-content-between"
              >
                <!-- <router-link to="/posts" tag="button">Journal</router-link> -->
                <span
                  ><i class="icon-settings g-pos-rel g-top-1 g-mr-8"></i>
                  Journal</span
                >
              </a>
              <!-- End Settings -->
              <!-- Settings -->
              <a
                href="/variables"
                class="list-group-item list-group-item-action justify-content-between"
              >
                <span
                  ><i class="icon-settings g-pos-rel g-top-1 g-mr-8"></i>
                  Variables Graphs</span
                >
              </a>
              <!-- End Settings -->
            </div>
            <!-- End Sidebar Navigation -->
          </div>
          <!-- End Profile Sidebar -->

          <!-- Profle Content -->
          <div class="col-lg-9">
            <!-- User Block -->
            <div class="g-brd-around g-brd-gray-light-v4 g-pa-20 g-mb-40">
              <div class="row">
                <!-- <div class="col-lg-4 g-mb-40 g-mb-0--lg"></div> -->

                <div class="row">
                  <!-- User Details -->
                  <div
                    class="d-flex align-items-center justify-content-sm-between g-mb-5"
                  >
                    <h2 class="g-font-weight-300 g-mr-10">{{ user.name }}</h2>
                  </div>
                  <!-- End User Details -->

                  <hr class="g-brd-gray-light-v4 g-my-20" />

                  <p class="lead g-line-height-1_8">
                    Welcome buddy! This is the page where you will do most of
                    your heavy lifting. The idea is to think of some things
                    (variables) that you think are important to track, i.e
                    things that affect youir pain. You can create your variables
                    here, and then all of the variables you create will be
                    displayed on this page. For each variable, you will track a
                    "value" and a "rating". A rating is a number from 1-10, and
                    is meant to reflect how you feel about how you did on a
                    current variable for that day. The value is the actual
                    amount of whatever that variable is. To make things a bit
                    clearer, if you think the amount of sleep you get impacts
                    your pain experience, "hours slept" can be your variable.
                    Say you sleep 8 hours one night. Your value would be 8, and
                    your rating could be a 9 or 10 (since 8 seems like a pretty
                    ideal amount of sleep). Have fun, and feel better!
                  </p>

                  <hr class="g-brd-gray-light-v4 g-my-20" />
                </div>
              </div>
            </div>
            <!-- End User Block -->

            <!-- Experience Timeline -->
            <div class="card border-0 rounded-0 g-mb-40">
              <!-- Panel Header -->
              <div
                class="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-15"
              >
                <h3 class="h6 mb-0">
                  <i class="icon-briefcase g-pos-rel g-top-1 g-mr-5"></i>
                  Experience
                </h3>
                <div class="dropdown g-mb-10 g-mb-0--md">
                  <span
                    class="d-block g-color-primary--hover g-cursor-pointer g-mr-minus-5 g-pa-5"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="icon-options-vertical g-pos-rel g-top-1"></i>
                  </span>
                  <div
                    class="dropdown-menu dropdown-menu-right rounded-0 g-mt-10"
                  >
                    <a class="dropdown-item g-px-10" href="#">
                      <i
                        class="icon-layers g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                      ></i>
                      Projects
                    </a>
                    <a class="dropdown-item g-px-10" href="#">
                      <i
                        class="icon-wallet g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                      ></i>
                      Wallets
                    </a>
                    <a class="dropdown-item g-px-10" href="#">
                      <i
                        class="icon-fire g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                      ></i>
                      Reports
                    </a>
                    <a class="dropdown-item g-px-10" href="#">
                      <i
                        class="icon-settings g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                      ></i>
                      Users Setting
                    </a>

                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item g-px-10" href="#">
                      <i
                        class="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                      ></i>
                      View More
                    </a>
                  </div>
                </div>
              </div>
              <!-- End Panel Header -->

              <!-- Panel Body -->
              <div
                class="js-scrollbar card-block u-info-v1-1 g-bg-white-gradient-v1--after g-height-300 g-pa-0"
              >
                <ul class="row u-timeline-v2-wrap list-unstyled">
                  <li
                    class="col-md-12 g-brd-bottom g-brd-0--md g-brd-gray-light-v4 g-pb-30 g-pb-0--md g-mb-30 g-mb-0--md"
                  >
                    <div class="row">
                      <!-- Timeline Date -->
                      <div
                        class="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md"
                      >
                        <h4 class="h5 g-font-weight-300">Project Manager</h4>
                        <h5 class="h6 g-font-weight-300 mb-0">
                          2016 - Current
                        </h5>
                      </div>
                      <!-- End Timeline Date -->

                      <!-- Timeline Content -->
                      <div
                        class="col-md-9 align-self-center g-orientation-left g-pl-40--md"
                      >
                        <!-- Timeline Dot -->
                        <div
                          class="g-hidden-sm-down u-timeline-v2__icon g-top-35"
                        >
                          <i
                            class="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle"
                          ></i>
                        </div>
                        <!-- End Timeline Dot -->

                        <article class="g-pa-10--md">
                          <h3 class="h4 g-font-weight-300">Pixeel Ltd.</h3>
                          <p class="mb-0">
                            Winter purslane courgette pumpkin quandong komatsuna
                            fennel green bean cucumber. Pea cress potato sprouts
                            wattle seed rutabaga.
                          </p>
                        </article>
                      </div>
                      <!-- End Timeline Content -->
                    </div>
                  </li>
                  <li
                    class="col-md-12 g-brd-bottom g-brd-0--md g-brd-gray-light-v4 g-pb-30 g-pb-0--md g-mb-30 g-mb-0--md"
                  >
                    <div class="row">
                      <!-- Timeline Date -->
                      <div
                        class="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md"
                      >
                        <h4 class="h5 g-font-weight-300">
                          Full Stack Developer
                        </h4>
                        <h5 class="h6 g-font-weight-300 mb-0">2014 - 2016</h5>
                      </div>
                      <!-- End Timeline Date -->

                      <!-- Timeline Content -->
                      <div
                        class="col-md-9 align-self-center g-orientation-left g-pl-40--md"
                      >
                        <!-- Timeline Dot -->
                        <div
                          class="g-hidden-sm-down u-timeline-v2__icon g-top-35"
                        >
                          <i
                            class="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle"
                          ></i>
                        </div>
                        <!-- End Timeline Dot -->

                        <article class="g-pa-10--md">
                          <h3 class="h4 g-font-weight-300">Htmlstream</h3>
                          <p class="mb-0">
                            Winter purslane courgette pumpkin quandong komatsuna
                            fennel green bean cucumber. Pea cress potato sprouts
                            wattle seed rutabaga.
                          </p>
                        </article>
                      </div>
                      <!-- End Timeline Content -->
                    </div>
                  </li>
                  <li
                    class="col-md-12 g-brd-bottom g-brd-0--md g-brd-gray-light-v4 g-pb-30 g-pb-0--md g-mb-30 g-mb-0--md"
                  >
                    <div class="row">
                      <!-- Timeline Date -->
                      <div
                        class="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md"
                      >
                        <h4 class="h5 g-font-weight-300">Frontend Developer</h4>
                        <h5 class="h6 g-font-weight-300 mb-0">2012 - 2014</h5>
                      </div>
                      <!-- End Timeline Date -->

                      <!-- Timeline Content -->
                      <div
                        class="col-md-9 align-self-center g-orientation-left g-pl-40--md"
                      >
                        <!-- Timeline Dot -->
                        <div
                          class="g-hidden-sm-down u-timeline-v2__icon g-top-35"
                        >
                          <i
                            class="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle"
                          ></i>
                        </div>
                        <!-- End Timeline Dot -->

                        <article class="g-pa-10--md">
                          <h3 class="h4 g-font-weight-300">Amazon Inc.</h3>
                          <p class="mb-0">
                            Winter purslane courgette pumpkin quandong komatsuna
                            fennel green bean cucumber. Pea cress potato sprouts
                            wattle seed rutabaga.
                          </p>
                        </article>
                      </div>
                      <!-- End Timeline Content -->
                    </div>
                  </li>
                  <li class="col-md-12">
                    <div class="row">
                      <!-- Timeline Date -->
                      <div
                        class="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md"
                      >
                        <h4 class="h5 g-font-weight-300">UX/UI Designer</h4>
                        <h5 class="h6 g-font-weight-300 mb-0">2010 - 2012</h5>
                      </div>
                      <!-- End Timeline Date -->

                      <!-- Timeline Content -->
                      <div
                        class="col-md-9 align-self-center g-orientation-left g-pl-40--md"
                      >
                        <!-- Timeline Dot -->
                        <div
                          class="g-hidden-sm-down u-timeline-v2__icon g-top-35"
                        >
                          <i
                            class="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle"
                          ></i>
                        </div>
                        <!-- End Timeline Dot -->

                        <article class="g-pa-10--md">
                          <h3 class="h4 g-font-weight-300">Apple Inc.</h3>
                          <p class="mb-0">
                            Winter purslane courgette pumpkin quandong komatsuna
                            fennel green bean cucumber. Pea cress potato sprouts
                            wattle seed rutabaga.
                          </p>
                        </article>
                      </div>
                      <!-- End Timeline Content -->
                    </div>
                  </li>
                </ul>
              </div>
              <!-- End Panel Body -->
            </div>
            <!-- End Experience Timeline -->

            <!-- Education Timeline -->
            <div class="card border-0 rounded-0 g-mb-40">
              <!-- Panel Header -->
              <div
                class="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-15"
              >
                <h3 class="h6 mb-0">
                  <i class="icon-graduation g-pos-rel g-top-1 g-mr-5"></i>
                  Education
                </h3>
                <div class="dropdown g-mb-10 g-mb-0--md">
                  <span
                    class="d-block g-color-primary--hover g-cursor-pointer g-mr-minus-5 g-pa-5"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="icon-options-vertical g-pos-rel g-top-1"></i>
                  </span>
                  <div
                    class="dropdown-menu dropdown-menu-right rounded-0 g-mt-10"
                  >
                    <a class="dropdown-item g-px-10" href="#">
                      <i
                        class="icon-layers g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                      ></i>
                      Projects
                    </a>
                    <a class="dropdown-item g-px-10" href="#">
                      <i
                        class="icon-wallet g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                      ></i>
                      Wallets
                    </a>
                    <a class="dropdown-item g-px-10" href="#">
                      <i
                        class="icon-fire g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                      ></i>
                      Reports
                    </a>
                    <a class="dropdown-item g-px-10" href="#">
                      <i
                        class="icon-settings g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                      ></i>
                      Users Setting
                    </a>

                    <div class="dropdown-divider"></div>

                    <a class="dropdown-item g-px-10" href="#">
                      <i
                        class="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                      ></i>
                      View More
                    </a>
                  </div>
                </div>
              </div>
              <!-- End Panel Header -->

              <!-- Panel Body -->
              <div
                class="js-scrollbar card-block u-info-v1-1 g-bg-white-gradient-v1--after g-height-300 g-pa-0"
              >
                <ul class="row u-timeline-v2-wrap list-unstyled">
                  <li
                    class="col-md-12 g-brd-bottom g-brd-0--md g-brd-gray-light-v4 g-pb-30 g-pb-0--md g-mb-30 g-mb-0--md"
                  >
                    <div class="row">
                      <!-- Timeline Date -->
                      <div
                        class="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md"
                      >
                        <h4 class="h5 g-font-weight-300">MBA</h4>
                        <h5 class="h6 g-font-weight-300 mb-0">2008 - 2010</h5>
                      </div>
                      <!-- End Timeline Date -->

                      <!-- Timeline Content -->
                      <div
                        class="col-md-9 align-self-center g-orientation-left g-pl-40--md"
                      >
                        <!-- Timeline Dot -->
                        <div
                          class="g-hidden-sm-down u-timeline-v2__icon g-top-35"
                        >
                          <i
                            class="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle"
                          ></i>
                        </div>
                        <!-- End Timeline Dot -->

                        <article class="g-pa-10--md">
                          <h3 class="h4 g-font-weight-300">
                            Imperial College London
                          </h3>
                          <p class="mb-0">
                            Winter purslane courgette pumpkin quandong komatsuna
                            fennel green bean cucumber. Pea cress potato sprouts
                            wattle seed rutabaga.
                          </p>
                        </article>
                      </div>
                      <!-- End Timeline Content -->
                    </div>
                  </li>
                  <li
                    class="col-md-12 g-brd-bottom g-brd-0--md g-brd-gray-light-v4 g-pb-30 g-pb-0--md g-mb-30 g-mb-0--md"
                  >
                    <div class="row">
                      <!-- Timeline Date -->
                      <div
                        class="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md"
                      >
                        <h4 class="h5 g-font-weight-300">Bachelor of IT</h4>
                        <h5 class="h6 g-font-weight-300 mb-0">2004 - 2008</h5>
                      </div>
                      <!-- End Timeline Date -->

                      <!-- Timeline Content -->
                      <div
                        class="col-md-9 align-self-center g-orientation-left g-pl-40--md"
                      >
                        <!-- Timeline Dot -->
                        <div
                          class="g-hidden-sm-down u-timeline-v2__icon g-top-35"
                        >
                          <i
                            class="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle"
                          ></i>
                        </div>
                        <!-- End Timeline Dot -->

                        <article class="g-pa-10--md">
                          <h3 class="h4 g-font-weight-300">MIT University</h3>
                          <p class="mb-0">
                            Winter purslane courgette pumpkin quandong komatsuna
                            fennel green bean cucumber. Pea cress potato sprouts
                            wattle seed rutabaga.
                          </p>
                        </article>
                      </div>
                      <!-- End Timeline Content -->
                    </div>
                  </li>
                  <li
                    class="col-md-12 g-brd-bottom g-brd-0--md g-brd-gray-light-v4 g-pb-30 g-pb-0--md g-mb-30 g-mb-0--md"
                  >
                    <div class="row">
                      <!-- Timeline Date -->
                      <div
                        class="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md"
                      >
                        <h4 class="h5 g-font-weight-300">High School</h4>
                        <h5 class="h6 g-font-weight-300 mb-0">2001 - 2004</h5>
                      </div>
                      <!-- End Timeline Date -->

                      <!-- Timeline Content -->
                      <div
                        class="col-md-9 align-self-center g-orientation-left g-pl-40--md"
                      >
                        <!-- Timeline Dot -->
                        <div
                          class="g-hidden-sm-down u-timeline-v2__icon g-top-35"
                        >
                          <i
                            class="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle"
                          ></i>
                        </div>
                        <!-- End Timeline Dot -->

                        <article class="g-pa-10--md">
                          <h3 class="h4 g-font-weight-300">
                            Chicago High School
                          </h3>
                          <p class="mb-0">
                            Winter purslane courgette pumpkin quandong komatsuna
                            fennel green bean cucumber. Pea cress potato sprouts
                            wattle seed rutabaga.
                          </p>
                        </article>
                      </div>
                      <!-- End Timeline Content -->
                    </div>
                  </li>
                  <li class="col-md-12">
                    <div class="row">
                      <!-- Timeline Date -->
                      <div
                        class="col-md-3 align-self-center text-md-right g-pr-40--md g-mb-20 g-mb-0--md"
                      >
                        <h4 class="h5 g-font-weight-300">Elementary School</h4>
                        <h5 class="h6 g-font-weight-300 mb-0">2001 - 1992</h5>
                      </div>
                      <!-- End Timeline Date -->

                      <!-- Timeline Content -->
                      <div
                        class="col-md-9 align-self-center g-orientation-left g-pl-40--md"
                      >
                        <!-- Timeline Dot -->
                        <div
                          class="g-hidden-sm-down u-timeline-v2__icon g-top-35"
                        >
                          <i
                            class="d-block g-width-18 g-height-18 g-bg-primary g-brd-around g-brd-4 g-brd-gray-light-v4 rounded-circle"
                          ></i>
                        </div>
                        <!-- End Timeline Dot -->

                        <article class="g-pa-10--md">
                          <h3 class="h4 g-font-weight-300">
                            New York Elementary School
                          </h3>
                          <p class="mb-0">
                            Winter purslane courgette pumpkin quandong komatsuna
                            fennel green bean cucumber. Pea cress potato sprouts
                            wattle seed rutabaga.
                          </p>
                        </article>
                      </div>
                      <!-- End Timeline Content -->
                    </div>
                  </li>
                </ul>
              </div>
              <!-- End Panel Body -->
            </div>
            <!-- End Education Timeline -->

            <!-- User Accounts -->
            <div class="row">
              <!-- User Accounts (Option 1) -->
              <div class="col-md-6">
                <div class="card border-0 rounded-0">
                  <!-- Panel Header -->
                  <div
                    class="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-15"
                  >
                    <h3 class="h6 mb-0">
                      <i class="icon-directions g-pos-rel g-top-1 g-mr-5"></i>
                      User Accounts <small>(option 1)</small>
                    </h3>
                    <div class="dropdown g-mb-10 g-mb-0--md">
                      <span
                        class="d-block g-color-primary--hover g-cursor-pointer g-mr-minus-5 g-pa-5"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="icon-options-vertical g-pos-rel g-top-1"></i>
                      </span>
                      <div
                        class="dropdown-menu dropdown-menu-right rounded-0 g-mt-10"
                      >
                        <a class="dropdown-item g-px-10" href="#">
                          <i
                            class="icon-layers g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                          ></i>
                          Projects
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i
                            class="icon-wallet g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                          ></i>
                          Wallets
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i
                            class="icon-fire g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                          ></i>
                          Reports
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i
                            class="icon-settings g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                          ></i>
                          Users Setting
                        </a>

                        <div class="dropdown-divider"></div>

                        <a class="dropdown-item g-px-10" href="#">
                          <i
                            class="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                          ></i>
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- End Panel Header -->

                  <!-- Panel Body -->
                  <div
                    class="js-scrollbar card-block u-info-v1-1 g-bg-white-gradient-v1--after g-height-300 g-pa-0"
                  >
                    <ul class="list-unstyled">
                      <li
                        class="d-flex g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <a
                          class="u-icon-v3 u-icon-size--xs g-bg-facebook g-color-white rounded-circle g-mr-15"
                          href="#"
                          ><i class="fa fa-facebook"></i
                        ></a>
                        <a class="g-color-facebook" href="#">77johndoe</a>
                      </li>
                      <li
                        class="d-flex g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <a
                          class="u-icon-v3 u-icon-size--xs g-bg-twitter g-color-white rounded-circle g-mr-15"
                          href="#"
                          ><i class="fa fa-twitter"></i
                        ></a>
                        <a class="g-color-twitter" href="#">john-doe1977</a>
                      </li>
                      <li
                        class="d-flex g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <a
                          class="u-icon-v3 u-icon-size--xs g-bg-darkblue g-color-white rounded-circle g-mr-15"
                          href="#"
                          ><i class="fa fa-paypal"></i
                        ></a>
                        <a
                          class="g-color-darkblue g-color-darkblue--hover"
                          href="#"
                          >john.doe@htmlstream.com</a
                        >
                      </li>
                      <li
                        class="d-flex g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <a
                          class="u-icon-v3 u-icon-size--xs g-bg-lightred g-color-white rounded-circle g-mr-15"
                          href="#"
                          ><i class="fa fa-google-plus"></i
                        ></a>
                        <a
                          class="g-color-lightred g-color-lightred--hover"
                          href="#"
                          >john_doe</a
                        >
                      </li>
                      <li
                        class="d-flex g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <a
                          class="u-icon-v3 u-icon-size--xs g-bg-black g-color-white rounded-circle g-mr-15"
                          href="#"
                          ><i class="fa fa-github"></i
                        ></a>
                        <a class="g-color-black g-color-black--hover" href="#"
                          >john.doe.github</a
                        >
                      </li>
                      <li
                        class="d-flex g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <a
                          class="u-icon-v3 u-icon-size--xs g-bg-skype g-color-white rounded-circle g-mr-15"
                          href="#"
                          ><i class="fa fa-skype"></i
                        ></a>
                        <a class="g-color-skype" href="#">john_doe_723</a>
                      </li>
                      <li
                        class="d-flex g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <a
                          class="u-icon-v3 u-icon-size--xs g-bg-linkedin g-color-white rounded-circle g-mr-15"
                          href="#"
                          ><i class="fa fa-linkedin"></i
                        ></a>
                        <a class="g-color-linkedin" href="#">john.doe77</a>
                      </li>
                      <li
                        class="d-flex g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <a
                          class="u-icon-v3 u-icon-size--xs g-bg-lightred g-color-white rounded-circle g-mr-15"
                          href="#"
                          ><i class="fa fa-envelope"></i
                        ></a>
                        <a
                          class="g-color-lightred g-color-lightred--hover"
                          href="#"
                          >john.doe@htmlstream.com</a
                        >
                      </li>
                    </ul>
                  </div>
                  <!-- End Panel Body -->
                </div>
              </div>
              <!-- End User Accounts (Option 1) -->

              <!-- User Accounts (Option 2) -->
              <div class="col-md-6">
                <!-- User Accounts -->
                <div class="card border-0 rounded-0">
                  <!-- Panel Header -->
                  <div
                    class="card-header d-flex align-items-center justify-content-between g-bg-gray-light-v5 border-0 g-mb-15"
                  >
                    <h3 class="h6 mb-0">
                      <i class="icon-directions g-pos-rel g-top-1 g-mr-5"></i>
                      User Accounts <small>(option 2)</small>
                    </h3>
                    <div class="dropdown g-mb-10 g-mb-0--md">
                      <span
                        class="d-block g-color-primary--hover g-cursor-pointer g-mr-minus-5 g-pa-5"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <i class="icon-options-vertical g-pos-rel g-top-1"></i>
                      </span>
                      <div
                        class="dropdown-menu dropdown-menu-right rounded-0 g-mt-10"
                      >
                        <a class="dropdown-item g-px-10" href="#">
                          <i
                            class="icon-layers g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                          ></i>
                          Projects
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i
                            class="icon-wallet g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                          ></i>
                          Wallets
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i
                            class="icon-fire g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                          ></i>
                          Reports
                        </a>
                        <a class="dropdown-item g-px-10" href="#">
                          <i
                            class="icon-settings g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                          ></i>
                          Users Setting
                        </a>

                        <div class="dropdown-divider"></div>

                        <a class="dropdown-item g-px-10" href="#">
                          <i
                            class="icon-plus g-font-size-12 g-color-gray-dark-v5 g-mr-5"
                          ></i>
                          View More
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- End Panel Header -->

                  <!-- Panel Body -->
                  <div
                    class="js-scrollbar card-block u-info-v1-1 g-bg-white-gradient-v1--after g-height-300 g-pa-0"
                  >
                    <ul class="list-unstyled">
                      <li
                        class="d-flex justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <span class="text-nowrap g-mr-10"
                          ><i
                            class="fa fa-facebook g-color-facebook g-pos-rel g-top-1 g-mr-10"
                          ></i>
                          Facebook</span
                        >
                        <a class="g-color-facebook" href="#">77johndoe</a>
                      </li>
                      <li
                        class="d-flex justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <span class="text-nowrap g-mr-10"
                          ><i
                            class="fa fa-twitter g-color-twitter g-pos-rel g-top-1 g-mr-10"
                          ></i>
                          Twitter</span
                        >
                        <a class="g-color-twitter" href="#">john-doe1977</a>
                      </li>
                      <li
                        class="d-flex justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <span class="text-nowrap g-mr-10"
                          ><i
                            class="fa fa-paypal g-color-darkblue g-pos-rel g-top-1 g-mr-10"
                          ></i>
                          PayPal</span
                        >
                        <a
                          class="g-color-darkblue g-color-darkblue--hover"
                          href="#"
                          >john.doe@htmlstream.com</a
                        >
                      </li>
                      <li
                        class="d-flex justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <span class="text-nowrap g-mr-10"
                          ><i
                            class="fa fa-google g-color-lightred g-pos-rel g-top-1 g-mr-10"
                          ></i>
                          Google Plus</span
                        >
                        <a
                          class="g-color-lightred g-color-lightred--hover"
                          href="#"
                          >john_doe</a
                        >
                      </li>
                      <li
                        class="d-flex justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <span class="text-nowrap g-mr-10"
                          ><i
                            class="fa fa-github g-color-black g-pos-rel g-top-1 g-mr-10"
                          ></i>
                          Github</span
                        >
                        <a class="g-color-black g-color-black--hover" href="#"
                          >john.doe.github</a
                        >
                      </li>
                      <li
                        class="d-flex justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <span class="text-nowrap g-mr-10"
                          ><i
                            class="fa fa-skype g-color-skype g-pos-rel g-top-1 g-mr-10"
                          ></i>
                          Skype</span
                        >
                        <a class="g-color-skype" href="#">john_doe_723</a>
                      </li>
                      <li
                        class="d-flex justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <span class="text-nowrap g-mr-10"
                          ><i
                            class="fa fa-linkedin g-color-linkedin g-pos-rel g-top-1 g-mr-10"
                          ></i>
                          Linkedin</span
                        >
                        <a class="g-color-linkedin" href="#">john.doe77</a>
                      </li>
                      <li
                        class="d-flex justify-content-between g-brd-bottom g-brd-gray-light-v4 g-py-10 g-px-15"
                      >
                        <span class="text-nowrap g-mr-10"
                          ><i
                            class="fa fa-envelope g-color-lightred g-pos-rel g-top-1 g-mr-10"
                          ></i>
                          Gmail</span
                        >
                        <a
                          class="g-color-lightred g-color-lightred--hover"
                          href="#"
                          >john.doe@htmlstream.com</a
                        >
                      </li>
                    </ul>
                  </div>
                  <!-- End Panel Body -->
                </div>
                <!-- End User Accounts -->
              </div>
              <!-- End User Accounts (Option 2) -->
            </div>
            <!-- End User Accounts -->
          </div>
          <!-- End Profle Content -->
        </div>
      </div>
    </section>

    <a
      class="js-go-to u-go-to-v1"
      href="#"
      data-type="fixed"
      data-position='{
     "bottom": 15,
     "right": 15
   }'
      data-offset-top="400"
      data-compensation="#js-header"
      data-show-effect="zoomIn"
    >
      <i class="hs-icon hs-icon-arrow-top"></i>
    </a>

    <router-link to="/posts" tag="button">Journal</router-link>
    <div></div>
    <p>Name: {{ user.name }}</p>
    <img v-bind:src="user.image_url" alt="" />
    <p>Email: {{ user.email }}</p>
    <router-link :to="`/users/${user.id}/edit`" tag="button">Edit</router-link>
    <h2>Variables:</h2>
    <div v-for="variable in variables" v-bind:key="variable.id">
      <p>Name: {{ variable.name }}</p>

      <div>
        <p
          v-if="variable.last_entry && variable.last_entry.created_at == today"
        >
          Value:{{ variable.last_entry.value }}, Rating:{{
            variable.last_entry.rating
          }}
        </p>
        <form
          v-if="
            (variable.last_entry && variable.last_entry.created_at != today) ||
              !variable.last_entry
          "
          v-on:submit.prevent="entryNew(variable)"
        >
          <ul>
            <li class="text-danger" v-for="error in errors" v-bind:key="error">
              {{ error }}
            </li>
          </ul>
          <div class="form-group">
            <label>Value:</label>
            <input
              type="text"
              class="form-control"
              :id="variable.id"
              v-model="variable.value"
            />
            <br />
          </div>
          <div class="form-group">
            <label>Rating:</label>
            <input type="text" class="form-control" v-model="variable.rating" />
            <br />
          </div>
          <input type="submit" class="btn btn-primary" value="Submit" />
        </form>
      </div>
      <button v-on:click="variableDestroy(variable)">
        Delete Variable
      </button>
    </div>
    <form v-on:submit.prevent="variableNew()">
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Create New Variable:</label>
        <input type="text" class="form-control" v-model="newVariable" /> <br />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <router-link to="/variables" tag="button">Variable Graphs Page</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function() {
    return {
      user: {},
      variables: [],
      variable_id: "",
      value: "",
      rating: "",
      errors: [],
      newVariable: "",
      message: "",
      entryCreatedAt: "",
      today: "",
    };
  },
  created: function() {
    axios.get(`/api/users/${this.$route.params.id}`).then((response) => {
      console.log(response.data);
      this.user = response.data;
      this.variables = response.data.variables;
    });

    this.today = new Date();
    var dd = String(this.today.getDate()).padStart(2, "0");
    var mm = String(this.today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = this.today.getFullYear();
    this.today = mm + "/" + dd + "/" + yyyy;
    console.log(this.today);
  },
  methods: {
    variableDestroy: function(variable) {
      if (
        confirm(
          "Are you sure you want to delete this variable and all of the entries associated with it?"
        )
      ) {
        axios.delete(`/api/variables/${variable.id}`).then((response) => {
          console.log(response.data);
          this.message = response.data;
          for (var i = 0; i < this.variables.length; i++) {
            if (this.variables[i] === variable) {
              this.variables.splice(i, 1);
            }
          }
        });
      }
    },
    entryNew: function(variable) {
      var params = {
        variable_id: variable.id,
        value: variable.value,
        rating: variable.rating,
      };
      axios
        .post("/api/entries", params)
        .then((response) => {
          console.log(response.data);
          this.value = "";
          this.rating = "";
          this.errors = [];
          variable.last_entry = response.data;
          // this.$router.push(`users/${response.data.variable.user}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.errors);
        });
    },
    variableNew: function() {
      var params = {
        name: this.newVariable,
        // user_id: this.userId,
      };
      axios
        .post("/api/variables", params)
        .then((response) => {
          console.log(response.data);
          this.variables.push(response.data);
          this.newVariable = "";
          this.errors = [];
          // this.$router.push(`users/${response.data.variable.user}`);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
