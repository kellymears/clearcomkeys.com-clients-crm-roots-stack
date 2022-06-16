@include('components.modal-edit-company')

<div class="entry-content">
	
						<?php 
						global $wpdb;
						$locations = get_field('location');
						$locationName = $locations;
						$companies = $wpdb->get_results("SELECT * FROM $wpdb->posts WHERE post_type='companies' AND post_status='publish'");
						$locationArray = [];
						if($companies) {
							foreach ($companies as $company) {
								$location = get_field('location', $company->ID);
								if(!empty($location) && isset($location[0]->post_title) && $location[0]->post_title == $locations) {
									$locationArray[] = $company->post_title;
								}
							}
						}

						$locations = get_sub_field('locations');

						?>
						<?php if( $locations ): ?>
							<ul>
							<?php foreach( $locations as $location ): ?>
								<li>
									<a href="<?php echo get_permalink( $location->ID ); ?>">
										<?php echo get_the_title( $location->ID ); ?>
									</a>
								</li>
							<?php endforeach; ?>
							</ul>
						<?php endif; ?>

					</div>
				<?php if ($locationArray): ?>
					<div class="flex-1 mt-4 overflow-hidden bg-white shadow sm:rounded-lg">
						<div class="px-4 py-5 sm:px-6">
							<h3 class="text-lg font-medium leading-6 text-gray-900">Company list associated with this location</h3>
							<p class="max-w-2xl mt-1 text-sm text-gray-500">
							</p>
						</div>
						<div class="border-t border-gray-200">
							
						<?php foreach($locationArray as $singleLocation): ?>
								<div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
									<dt class="text-sm font-medium text-gray-500"><?php echo $singleLocation ?></dt>
				
								</div>
						<?php endforeach ?>
						</div>
					</div>
				<?php endif; ?>
				<div class="flex-1 mt-4 overflow-hidden bg-white shadow sm:rounded-lg">
					<div class="px-4 py-5 sm:px-6">
						<h3 class="text-lg font-medium leading-6 text-gray-900">Contact list associated with this location</h3>
						<p class="max-w-2xl mt-1 text-sm text-gray-500">
						</p>
					</div>
					<div class="border-t border-gray-200">
					<?php
					$contacts = $wpdb->get_results("SELECT * FROM $wpdb->posts WHERE post_type='contacts' AND post_status='publish'");
					if($contacts) {
						foreach ($contacts as $contact) {
							$location = get_field('location_relationship', $contact->ID);
							if(isset($location['assign_location']) && $location['assign_location']) {
								if(!empty($location) && isset($location['location'][0]->post_title) && $location['location'][0]->post_title == $locationName) {
									?>
									@if( have_rows('contact_details', $contact->ID) )
										@while( have_rows('contact_details', $contact->ID) )
										@php
											the_row();
											$position_title = get_sub_field('position_title', $contact->ID);
										@endphp
				
										@if( have_rows('phone_numbers', $contact->ID) )
											@while( have_rows('phone_numbers', $contact->ID) )
				
											@php
												the_row();
												$phone = get_sub_field('phone', $contact->ID);
												$type = get_sub_field('phone_type', $contact->ID);
											@endphp
											@if($position_title != 'Key Tech')
												<div class="px-4 py-5 bg-gray-50 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
													<dt class="text-sm font-medium text-gray-500">{{ $type }}: {{ $phone->national }}</dt>
												</div>
											@endif
											@endwhile
										@endif
										@endwhile
									@endif
									<?php
								}
							}
						}
					}
					?>
					</div>
				</div>
