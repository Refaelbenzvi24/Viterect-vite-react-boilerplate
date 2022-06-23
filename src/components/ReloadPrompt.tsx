import { useRegisterSW } from 'virtual:pwa-register/react'
import { Alert, Button, Snackbar } from "@mui/material"


const ReloadPrompt = () => {
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
			<Snackbar
				open={offlineReady || needRefresh}
				autoHideDuration={6000}
				onClose={close}>
				<Alert severity="info">
					{
						offlineReady ? <span>App ready to work offline</span>
							: <span>New content available, click on reload button to update.</span>
					}
					{needRefresh && (
						<Button onClick={async () => updateServiceWorker(true)}>
							Reload
						</Button>
					)}
					<Button onClick={() => close()}>
						Close
					</Button>
				</Alert>
			</Snackbar>
		</div>
	)
}

export default ReloadPrompt
