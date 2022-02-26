import { useRegisterSW } from 'virtual:pwa-register/react'
import Button from './UI/Buttons/Button'


export default () => {
	const {
		      offlineReady: [offlineReady, setOfflineReady],
		      needRefresh:  [needRefresh, setNeedRefresh],
		      updateServiceWorker,
	      } = useRegisterSW({
		// onRegistered(r) {
		// },
		// onRegisterError(error) {
		// },
	})

	const close = () => {
		setOfflineReady(false)
		setNeedRefresh(false)
	}

	return (
		<div className="ReloadPrompt-container">
			{(offlineReady || needRefresh)
				&& (
					<div className="fixed w-full h-full">
						<div className="absolute w-full h-full">
							<div
								className="alert shadow-lg alert bg-white dark:bg-dark-200 opacity-90 absolute w-100 h-20 right-0 bottom-0 mb-5 mr-7">
								<div>
									{
										offlineReady ? <span>App ready to work offline</span>
											: <span>New content available, click on reload button to update.</span>
									}
								</div>

								{needRefresh && (
									<Button onClick={async () => updateServiceWorker(true)}>
										Reload
									</Button>
								)}
								<Button onClick={() => close()}>
									Close
								</Button>
							</div>
						</div>
					</div>
				)}
		</div>
	)
}
