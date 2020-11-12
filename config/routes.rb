Rails.application.routes.draw do
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	
	root to: 'static_pages#root'
	# resource :session, only: [:new, :create, :destroy]
	# resources	:users, except: [:index]
	# resources :notes
	
	namespace :api, defaults: { format: :json } do
		resource :session, only: [:create, :destroy]
		resources :users, except: [:index, :destroy]
		resources :notes, only: [:index, :create, :show, :update, :destroy]
	end
end
