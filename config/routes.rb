Rails.application.routes.draw do
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	
	root to: 'static_pages#root'

	namespace :api, defaults: { format: :json } do
		resource :session, only: [:create, :destroy]
		resources :users, only: [:create, :show, :update]
		resources :notes, only: [:index, :create, :show, :update, :destroy]
		resources :lists, only: [:index, :create, :show, :update, :destroy] do
				resources :list_items, only: [:index, :create, :show]
		end
		resources :list_items, only: [:destroy]
		
	end
end
